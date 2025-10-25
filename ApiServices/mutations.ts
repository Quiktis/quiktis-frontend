import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { request } from "./request";
import {
  InitiateResetPassword,
  Login,
  ResetPassword,
  SignUp,
  CreateEventData,
} from "../app/types/types";
import { useStore } from "@/app/context/QuiktisContext";

/**
 * ✅ This version exposes per-mutation states like:
 *    - isCreatingEvent
 *    - isDeletingEvent
 *    - isLoggingIn
 *    etc.
 * while still using your setMessage for success/error handling.
 */
export const mutations = () => {
  const { setMessage, setUser } = useStore();
  const router = useRouter();

  // ✅ Upload Media (used inside createEventWithUpload)
  const uploadMediaMutation = useMutation({
    mutationKey: ["upload-media"],
    mutationFn: request.uploadMedia,
  });

  // ✅ Create Event
  const createEventMutation = useMutation({
    mutationKey: ["create-event"],
    mutationFn: request.createEvent,
    onSuccess: (response) => {
      setMessage("Event created successfully!", "success");
      router.push("/my-events");
    },
    onError: (err: any) => {
      const errorMsg =
        err?.response?.data?.error ||
        err?.message ||
        "An unexpected error occurred";
      setMessage(errorMsg, "error");
    },
  });


  const isUploadingMedia = uploadMediaMutation.isPending;
const isCreatingEvent = createEventMutation.isPending;
const isCreating = isUploadingMedia || isCreatingEvent;

 const createEventWithUpload = async (data: {
  eventData: any;
  file: File;
}) => {
  try {
    setMessage(null, null);
    const uploadResponse = await uploadMediaMutation.mutateAsync(data.file);

    const fileData = uploadResponse.data.files || [];
    const bannerImage = fileData[0]?.cloudinaryUrl;
    if (!bannerImage) throw new Error("Upload failed — no image URL returned.");

    const { eventData } = data;
    const createData: CreateEventData = { ...eventData, bannerImage };

    await createEventMutation.mutateAsync(createData);
  } catch (err: any) {
    const errorMsg =
      err?.response?.data?.error ||
      err?.message ||
      "Failed to create event.";
    setMessage(errorMsg, "error");
  }
};

  // ✅ Delete Event
  const {
    mutateAsync: deleteEventMutation,
    isPending: isDeletingEvent,
  } = useMutation({
    mutationKey: ["delete-event"],
    mutationFn: request.deleteEvent,
    onSuccess: (response) => {
      setMessage("Event deleted successfully", "success");
      console.log("Event deleted successfully", response)
    },
    onError: (error) => {
      setMessage("Failed to delete event.", "error");
      console.log("Event deletion failed", error)
    },
  });

  // ✅ Login
  const {
    mutateAsync: loginMutation,
    isPending: isLoggingIn,
    isError: loginError,
  } = useMutation({
    mutationKey: ["login"],
    mutationFn: request.login,
    onSuccess: (response) => {
      setMessage(response.message, "success");
      setUser(response?.data?.user);
      router.push("/dashboard");
    },
    onError: (err: any) => {
      const errorMsg =
        err?.response?.data?.error ||
        err?.message ||
        "An unexpected error occurred";
      setMessage(
        errorMsg === "Invalid credentials"
          ? "Invalid email or password"
          : errorMsg,
        "error"
      );
    },
  });

  // ✅ Signup
  const {
    mutateAsync: signUpMutation,
    isPending: isSigningUp,
  } = useMutation({
    mutationKey: ["signup"],
    mutationFn: request.signup,
    onSuccess: (response) => {
      setMessage(response.message, "success");
      router.push("/verify-email");
    },
    onError: (err: any) => {
      const errorMsg =
        err?.response?.data?.error ||
        err?.error ||
        "Sign-up failed. Please try again.";
      setMessage(errorMsg, "error");
    },
  });

  // ✅ Initiate Reset Password
  const {
    mutateAsync: initiateResetPasswordMutation,
    isPending: isInitiatingReset,
  } = useMutation({
    mutationKey: ["initiate-reset"],
    mutationFn: request.initiateResetPassword,
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
  });

  // ✅ Reset Password
  const {
    mutateAsync: resetPasswordMutation,
    isPending: isResettingPassword,
  } = useMutation({
    mutationKey: ["reset-password"],
    mutationFn: request.resetPassword,
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
  });

  // ✅ Delete Payout Details
  const {
    mutateAsync: deletePayoutDetailsMutation,
    isPending: isDeletingPayout,
  } = useMutation({
    mutationKey: ["delete-payout-details"],
    mutationFn: request.deletePayoutDetails,
    onSuccess: () => {
      setMessage("Payout details deleted successfully", "success");
    },
    onError: () => {
      setMessage("Failed to delete payout details.", "error");
    },
  });

  // 🧩 Return all mutation functions + individual loading states
  return {
    // 🔐 Auth
    login: (data: Login) => loginMutation(data),
    signUp: (data: SignUp) => signUpMutation(data),
    initiateResetPassword: (data: InitiateResetPassword) =>
      initiateResetPasswordMutation(data),
    resetPassword: (data: ResetPassword) => resetPasswordMutation(data),

    // 🎟️ Events
     createEvent: (eventData: any, file: File) =>
    createEventWithUpload({ eventData, file }),

    deleteEvent: (eventId: string) => deleteEventMutation(eventId),

    // 💸 Payout
    deletePayoutDetails: (payoutID: string | number) =>
      deletePayoutDetailsMutation(payoutID),

    // 🧭 Loading states
    isCreating,
    isDeletingEvent,
    isLoggingIn,
    isSigningUp,
    isResettingPassword,
    isInitiatingReset,
    isDeletingPayout,
  };
};
