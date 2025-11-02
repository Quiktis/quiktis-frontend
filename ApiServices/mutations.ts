import { useRouter } from "next/navigation";
import { useStore } from "../app/lib/store";
import { useMutation } from "@tanstack/react-query";
import { request } from "./request";
import { CreateEventData } from "../app/types";
import { InitiateResetPassword, Login, ResetPassword, SignUp } from "../app/types";
import { create } from "domain";

export const Mutations = () => {
  const { setUser } = useStore();
  const router = useRouter();


  // Mutation for media upload
  const uploadMediaMutation = useMutation({
    mutationKey: ["upload-media"],
    mutationFn: request.uploadMedia,
  });


  const createEventMutation = useMutation({
    mutationKey: ["create-event"],
    mutationFn: request.createEvent,  
    
    onSuccess: (response) => {
      if (response) {
        router.push("/event");
      }
    },
  });


  const isUploadingMedia = uploadMediaMutation.isPending;
const isCreatingEvent = createEventMutation.isPending;
const isCreating = isUploadingMedia || isCreatingEvent;


  const createEventWithUpload = async (
  data: Omit<CreateEventData, "coverImage"> & { file: File }
) => {
  try {

    // Upload the image first
    const uploadResponse = await uploadMediaMutation.mutateAsync(data.file);

    // Defensive: handle both `file` and `files` keys gracefully
    const fileData =
      uploadResponse.data.files || uploadResponse.data.files || [];
    const coverImage = fileData[0]?.cloudinaryUrl;
    if (!coverImage) throw new Error("Upload failed — no image URL returned.");

    // Remove file field before sending to backend
    const { file, ...rest } = data;

    // Create the event payload
    const createData: CreateEventData = {
      ...rest,
      coverImage,
    };

    console.log("[DEBUG] Creating event with data:", createData);

    // 4️⃣ Create the event
    const response = await createEventMutation.mutateAsync(createData);
    console.log("[DEBUG] Event created response:", response);

    router.push("/event");
    return response;
  } catch (err: any) {
    const errorMsg =
      err?.response?.data?.error ||
      err?.message ||
      "Failed to create event.";
  } finally {
  }
};


  const { mutateAsync: loginMutation, isPending: isLoggingIn, isError: isLoginError, error:loginError } = useMutation({
    mutationKey: ["login"],
    mutationFn: request.login,
    onSuccess: (response) => {
      if (response) {
        setUser(response?.data?.user);
        router.push("/event");
      }
    },
    onError: (err: any) => {
      const errorMsg =
    err?.response?.data?.error || // 👈 backend error text
    err?.message ||               // fallback from Axios
    "An unexpected error occurred"; // final fallback


    },
  });

  const { 
    mutateAsync: signUpMutation, 
    isPending: isSigningUp, 
    isError: isSignupError, 
    error:signupError 
  } = useMutation({

    mutationKey: ["signup"],
    mutationFn: request.signup,
    onSuccess: (response) => {
      if (response) {
        router.push("/verify-email");
      }
    },
    onError: (err: any) => {
      const errorMsg =
    err?.response?.data?.error || // 👈 backend error text
    err?.message ||               // fallback from Axios
    "An unexpected error occurred"; // final fallback


    },
  });

  const { mutateAsync: initiateResetPasswordMutation } = useMutation({
    mutationKey: ["initiate-reset"],
    mutationFn: request.initiateResetPassword,
    
    onSuccess: (response) => {
      //setMessage(response.message, "success");
    },
    
  });

  const { mutateAsync: resetPasswordMutation } = useMutation({
    mutationKey: ["reset-password"],
    mutationFn: request.resetPassword,
    
    onSuccess: (response) => {
      //setMessage(response.message, "success");
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

    // Loading states
    isCreating,
    isCreatingEvent,
    isLoggingIn,
    isSigningUp,

    // Error States
    isLoginError,
    isSignupError,

    // Errors
    loginError,
    signupError
  };
};
