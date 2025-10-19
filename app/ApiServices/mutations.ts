import { useRouter } from "next/navigation";
import { useStore } from "../lib/store";
import { useMutation } from "@tanstack/react-query";
import { request } from "./request";
import { CreateEventData } from "../types";
import { InitiateResetPassword, Login, ResetPassword, SignUp } from "../types";
import { create } from "domain";

export const Mutations = () => {
  const { setLoading, setMessage, setUser } = useStore();
  const router = useRouter();


  // Mutation for media upload
  const uploadMediaMutation = useMutation({
    mutationKey: ["upload-media"],
    mutationFn: request.uploadMedia,
  });


  const { mutateAsync: createEventMutation } = useMutation({
    mutationKey: ["create-event"],
    mutationFn: request.createEvent,  
    onMutate: () => {
      setLoading(true);
      setMessage(null, null);
    },
    onSuccess: (response) => {
      if (response) {
        setMessage("Event created successfully!", "success");
        router.push("/event");
      }
    },
    onError: (err: any) => {
      const errorMsg =
        err?.response?.data?.error || 
        err?.message ||               
        "An unexpected error occurred";
      setMessage(errorMsg, "error");
    },
    onSettled: () => {
      setLoading(false);
    },
  });



  const createEventWithUpload = async (
  data: Omit<CreateEventData, "coverImage"> & { file: File }
) => {
  try {
    setLoading(true);
    setMessage(null, null);

    // 1️⃣ Upload the image first
    const uploadResponse = await uploadMediaMutation.mutateAsync(data.file);

    // ✅ Defensive: handle both `file` and `files` keys gracefully
    const fileData =
      uploadResponse.data.files || uploadResponse.data.files || [];
    const coverImage = fileData[0]?.cloudinaryUrl;
    if (!coverImage) throw new Error("Upload failed — no image URL returned.");

    // 2️⃣ Remove file field before sending to backend
    const { file, ...rest } = data;

    // 3️⃣ Create the event payload
    const createData: CreateEventData = {
      ...rest,
      coverImage,
    };

    console.log("[DEBUG] Creating event with data:", createData);

    // 4️⃣ Create the event
    const response = await createEventMutation(createData);
    console.log("[DEBUG] Event created response:", response);

    setMessage("Event created successfully!", "success");
    router.push("/event");
    return response;
  } catch (err: any) {
    const errorMsg =
      err?.response?.data?.error ||
      err?.message ||
      "Failed to create event.";
    setMessage(errorMsg, "error");
  } finally {
    setLoading(false);
  }
};




  const { mutateAsync: loginMutation } = useMutation({
    mutationKey: ["login"],
    mutationFn: request.login,
    onMutate: () => {
      setLoading(true);
      setMessage(null, null);
    },
    onSuccess: (response) => {
      if (response) {
        setMessage(response.message, "success");
        setUser(response?.data?.user);
        router.push("/event");
      }
    },
    onError: (err: any) => {
      const errorMsg =
    err?.response?.data?.error || // 👈 backend error text
    err?.message ||               // fallback from Axios
    "An unexpected error occurred"; // final fallback


      setMessage( errorMsg === 'Invalid credentials' ? "Invalid email or password" : errorMsg, "error");
    },
    onSettled: () => {
      setLoading(false);
    },
  });

  const { mutateAsync: signUpMutation } = useMutation({
    mutationKey: ["signup"],
    mutationFn: request.signup,
    onMutate: () => {
      setLoading(true);
      setMessage(null, null);
    },
    onSuccess: (response) => {
      if (response) {
        setMessage(response.message, "success");
        router.push("/verify-email");
      }
    },
    onError: (err: any) => {
      const errorMsg =
        err?.response?.data?.error ||
        err?.error ||
        "Sign-up failed. Please try again.";
      setMessage(errorMsg, "error");
    },
    onSettled: () => {
      setLoading(false);
    },
  });

  const { mutateAsync: initiateResetPasswordMutation } = useMutation({
    mutationKey: ["initiate-reset"],
    mutationFn: request.initiateResetPassword,
    onMutate: () => {
      setLoading(true);
      setMessage(null, null);
    },
    onSuccess: (response) => {
      setMessage(response.message, "success");
    },
    onError: (err: any) => {
      const errorMsg =
        err?.response?.data?.message ||
        err?.message ||
        "Unable to send reset link.";
      setMessage(errorMsg, "error");
    },
    onSettled: () => {
      setLoading(false);
    },
  });

  const { mutateAsync: resetPasswordMutation } = useMutation({
    mutationKey: ["reset-password"],
    mutationFn: request.resetPassword,
    onMutate: () => {
      setLoading(true);
      setMessage(null, null);
    },
    onSuccess: (response) => {
      setMessage(response.message, "success");
    },
    onError: (err: any) => {
      const errorMsg =
        err?.response?.data?.message ||
        err?.message ||
        "Failed to reset password.";
      setMessage(errorMsg, "error");
    },
    onSettled: () => {
      setLoading(false);
    },
  });

  return {
    login: (data: Login) => loginMutation(data),
    signUp: (data: SignUp) => signUpMutation(data),
    //uploadMedia: (file: File) => uploadMediaMutation.mutateAsync(file),
    //createEvent: (data: CreateEventData) => createEventMutation(data),
    createEvent: (data: Omit<CreateEventData, "coverImage"> & { file: File }) => createEventWithUpload(data),
    initiateResetPassword: (data: InitiateResetPassword) =>
      initiateResetPasswordMutation(data),
    resetPassword: (data: ResetPassword) => resetPasswordMutation(data),
  };
};
