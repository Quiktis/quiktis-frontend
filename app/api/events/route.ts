import { NextResponse } from "next/server";
import axios from "axios";

/**
 * Simple retry helper for axios POST
 */
async function postWithRetry(url: string, data: any, config: any, maxRetries = 3) {
  let lastError;
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      console.log(`🔁 Attempt ${attempt}/${maxRetries} → POST ${url}`);
      const response = await axios.post(url, data, config);
      console.log(`✅ Success on attempt ${attempt} for ${url}`);
      return response;
    } catch (err: any) {
      lastError = err;
      console.error(`❌ Attempt ${attempt} failed for ${url}:`, err.message);
      if (attempt < maxRetries) {
        console.log("⏳ Retrying...");
        await new Promise((res) => setTimeout(res, 1000 * attempt)); // exponential backoff
      }
    }
  }
  throw lastError;
}

export async function POST(req: Request) {
  try {
    console.log("➡️ Incoming request to /api/events (proxy)");

    // Parse incoming formData
    const formData = await req.formData();
    console.log("📦 Raw formData entries:");
    formData.forEach((value, key) => {
      console.log(`   ${key}:`, value);
    });

    // ✅ Extract image file
    const file = formData.get("files") as Blob | null;
    if (!file) {
      console.error("❌ No file found in formData");
      return NextResponse.json(
        { status: "error", message: "No file provided" },
        { status: 400 }
      );
    }
    console.log("🖼️ File detected in formData");

    // ✅ Upload image with retry
    const uploadUrl = `${process.env.BASE_URL}/medias/upload`;
    console.log("🌍 Uploading image to:", uploadUrl);

    const uploadResponse = await postWithRetry(
      uploadUrl,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: req.headers.get("authorization") || "",
        },
      }
    );

    console.log("✅ Upload response status:", uploadResponse.status);
    console.log("✅ Upload response data:", uploadResponse.data);

    if (uploadResponse.data?.status !== "success") {
      console.error("❌ Image upload failed:", uploadResponse.data);
      return NextResponse.json(
        { status: "error", message: "Image upload failed" },
        { status: 400 }
      );
    }

    const files = uploadResponse.data?.data?.files;
    if (!files || !files[0]) {
      console.error("❌ No files found in upload response:", uploadResponse.data);
      return NextResponse.json(
        { status: "error", message: "Upload response missing files array" },
        { status: 400 }
      );
    }

    const imageUrl = files[0].cloudinaryUrl || files[0].url;
    console.log("🖼️ Image uploaded successfully. URL:", imageUrl);

    // ✅ Extract event fields from formData
    const eventPayload: any = {};
    formData.forEach((value, key) => {
      if (key !== "files") {
        try {
          eventPayload[key] = JSON.parse(value as string); // handle JSON fields (tickets etc.)
        } catch {
          eventPayload[key] = value;
        }
      }
    });
    eventPayload.bannerImage = imageUrl;

    // ✅ Normalize dates to ISO strings
    if (eventPayload.startDate) {
      try {
        eventPayload.startDate = new Date(eventPayload.startDate).toISOString();
      } catch (err) {
        console.error("❌ Invalid startDate format:", eventPayload.startDate);
      }
    }
    if (eventPayload.endDate) {
      try {
        eventPayload.endDate = new Date(eventPayload.endDate).toISOString();
      } catch (err) {
        console.error("❌ Invalid endDate format:", eventPayload.endDate);
      }
    }

    console.log("📤 Final event payload ready to send:", eventPayload);

    // ✅ Create event with retry
    const createUrl = `${process.env.BASE_URL}/events`;
    console.log("🌍 Creating event at:", createUrl);
    console.log("📦 Event payload:", eventPayload);

    const createResponse = await postWithRetry(
      createUrl,
      eventPayload,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: req.headers.get("authorization") || "",
        },
      }
    );

    console.log("✅ Create event response status:", createResponse.status);
    console.log("✅ Create event response data:", createResponse.data);

    return NextResponse.json(createResponse.data, { status: 200 });
  } catch (error: any) {
    console.error("❌ Proxy create event error");
    console.error("   Message:", error.message);
    if (error.response) {
      console.error("   Status:", error.response.status);
      console.error("   Data:", error.response.data);
    }
    return NextResponse.json(
      {
        status: "error",
        message: error.response?.data?.message || error.message || "Failed to create event",
      },
      { status: error.response?.status || 500 }
    );
  }
}
