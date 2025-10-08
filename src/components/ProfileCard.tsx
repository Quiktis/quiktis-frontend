import React from "react";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
//import ProfileImageUploader from "./ProfileImageUploader/ProfileImageUploader";
import { useUser, User } from "@/src/app/context/UserContext";
import useAxios from "@/src/app/hooks/useAxios";

interface ProfileCardProps {
  name?: string;
  email?: string;
  age?: any;
  location?: string;
  containerClass?: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ containerClass }) => {
  const { sendRequest } = useAxios();
  const { user, setProfile, setProfilePreview, profilePreview, setUser } =
    useUser();

  // ...existing code...

  const handleProfileSave = async (croppedImage: string) => {
    try {
      // Convert base64 string to file
      const response = await fetch(croppedImage);
      const blob = await response.blob();
      const file = new File([blob], "profile.jpg", { type: "image/jpeg" });

      // Create FormData
      const formData = new FormData();
      formData.append("files", file);

      // Upload the image - Remove Content-Type header for FormData
      const uploadResponse = await sendRequest({
        url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/medias/upload`,
        method: "POST",
        headers: {
          Authorization: `Bearer ${user?.token}`,
        },
        body: formData,
      });

      console.log("Upload response:", uploadResponse); // Debug log to see response structure

      if (uploadResponse?.status !== "success") {
        console.error("Full upload response:", JSON.stringify(uploadResponse));
        throw new Error("Failed to get image URL from upload response");
      }

      let imageUrl = uploadResponse.data.files[0]?.cloudinaryUrl; // Adjust this based on the actual response structure
      console.log("Image URL:", imageUrl); // Debug log to see the image URL

      // Update user profile with the new image URL
      const updateProfileResponse = await sendRequest({
        url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/users/${user?.userId}`,
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user?.token}`,
        },
        body: JSON.stringify({
          picture: imageUrl, // Use the extracted URL
        }),
      });

      console.log("Update profile response:", updateProfileResponse); // Debug log to see response structure

      if (updateProfileResponse?.status !== "success") {
        //console.error("Profile update response:", updateProfileResponse);
        setUser({
          ...user,
          picture: imageUrl,
        } as User);
        //throw new Error("Failed to update profile");
      }

      // Update local user state
      /*setUser({
    ...user,
    picture: imageUrl,
  } as User);*/

      // Update local storage
      const storedUser = localStorage.getItem("quiktis_user");
      if (storedUser) {
        const parsedUser = JSON.parse(storedUser);
        parsedUser.picture = imageUrl; // Update the picture property
        localStorage.setItem("quiktis_user", JSON.stringify(parsedUser));
      }

      return imageUrl; // Return the URL for the ProfileImageUploader
    } catch (error) {
      console.error("Error uploading profile image:", error);
      throw error;
    }
  };

  return (
    <section className={containerClass}>
      <div
        className={`grid relative w-full md:w-[fit-content] newsletter-bg rounded-[40px] bg-gradient-to-br from-[#4f3130] to-[#323232] px-3 md:px-[3.8em] py-5 md:py-[3em] text-white shadow-lg h-fit `}
      >
        {/* Top Section */}
        <div className="grid grid-cols-[5.1em_auto] md:grid-cols-[7em_auto] my-auto gap-[0.8em] max-md:w-[90%] max-md:mx-auto w-fit h-fit">
          {/*<ProfileImageUploader 
        preview={profilePreview}
        setPreview={setProfilePreview}
        setImage={setProfile}
        onSave={handleProfileSave}
      />*/}
          <div className="h-fit my-auto">
            <div className="flex max-md:gap-3 gap-[3em] justify-between ">
              <div className="flex flex-col">
                <h2 className="text-xl font-semibold w-fit">{user.name}</h2>
                <p className="text-gray-300 text-xs sm:text-sm w-fit">
                  {user.email}
                </p>
              </div>
              <div className="hidden justify-center gap-4 h-fit my-auto">
                <Link href="#" className="hover:text-gray-400">
                  <FaFacebook size={20} />
                </Link>
                <Link href="#" className="hover:text-gray-400">
                  <FaInstagram size={20} />
                </Link>
                <Link href="#" className="hover:text-gray-400">
                  <FaLinkedin size={20} />
                </Link>
                <Link href="#" className="hover:text-gray-400">
                  <FaTwitter size={20} />
                </Link>
                <Link href="#" className="hover:text-gray-400">
                  <FaYoutube size={20} />
                </Link>
              </div>

              <div className="w-[6em] max-md:w-[0em]"></div>
            </div>
            <hr className="my-4 border-gray-400 mt-5"></hr>
          </div>
        </div>
        {/* Bottom Section */}
        {!user.age && !user.location ? null : (
          <div className="flex gap-14 justify-center w-full items-center text-gray-300 uppercase text-xs">
            {user.age && (
              <div className="flex flex-col gap-2">
                <h3 className="block text-gray-400">Age</h3>
                <div className="flex flex-row sm:flex-col gap-1">
                  <p className="text-2xl font-bold text-white">{user.age}</p>
                </div>
              </div>
            )}
            {user.location && (
              <div className="flex flex-col gap-2">
                <h1 className="block text-gray-400">Location</h1>
                <p className="text-2xl font-bold text-white">{user.location}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProfileCard;
