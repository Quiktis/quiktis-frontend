import { useRouter } from "next/navigation";
import { useStore } from "../../lib/store";
import { useMutation } from "@tanstack/react-query";
import { request } from "../request";
import {
  GoogleCallback,
  InitiateResetPassword,
  Login,
  ResetPassword,
  SignUp,
  VerifyEmail,
} from "../../types";
import useNotify from "./useNotify";

export const useMutations = () => {
  const { setLoading, setMessage, setUserId, setIsError, setIsSuccess } = useStore();
  const {success, error}= useNotify()
  const router = useRouter();
  //auth
  const { mutateAsync: loginMutation } = useMutation({
    mutationKey: ["login"],
    mutationFn: request.login,
    onMutate: () => {
      setLoading(true);
      setMessage("");
    },
    onSuccess: (response) => {
      if (response) {
        setMessage(response.message);
        success(response.message)
        setUserId(response?.data?.user?.id);
        router.push("/");
      }
    },
    onError: (err) => {
      if (err) {
        setMessage(err.message);
        error(err.message)
      }
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
      setMessage("");
    },
    onSuccess: (response) => {
      if (response) {
        setMessage(response.message);
        success(response.message)
        router.push("/verify-email");
      }
    },
    onError: (err) => {
      if (err) {
        setMessage(err.message);
        error(err.message)
      }
    },
    onSettled: () => {
      setLoading(false);
    },
  });
 const { mutateAsync: verifyEmailMutation } = useMutation({
    mutationKey: ["verify"],
    mutationFn: request.verifyEmail,
    onMutate: () => {
      setLoading(true);
      setMessage("");
    },
    onSuccess: (response) => {
      if (response) {
        setMessage(response.message);
        success(response.message)
        setIsSuccess(true)
        router.push("/login");
      }
    },
    onError: (err) => {
      if (err) {
        setIsError(false)
        setMessage(err.message);
        error(err.message)
      }
    },
    onSettled: () => {
      setLoading(false);
    },
  });
  const { mutateAsync: initiateResetPasswordMutation } = useMutation({
    mutationKey: ["initiate-reset"],
    onMutate: () => {
      setLoading(true);
    },
    mutationFn: request.initiateResetPassword,
    onSuccess: (response) => {
      if (response) {
        setMessage(response.message);
        success(response.message)
      }
    },
    onError: (err) => {
      if (err) {
        setMessage(err.message);
        error(err.message)
      }
    },
    onSettled: () => {
      setLoading(false);
    },
  });
  const { mutateAsync: resetPasswordMutation } = useMutation({
    mutationKey: ["reset-password"],
    onMutate: () => {
      setLoading(true);
    },
    mutationFn: request.resetPassword,
    onSuccess: (response) => {
      if (response) {
        setMessage(response.message);
        success(response.message)
      }
    },
    onError: (err) => {
      if (err) {
        setMessage(err.message);
        error(err.message);
      }
    },
    onSettled: () => {
      setLoading(false);
    },
  });
  const { mutateAsync: initiateGoogleMutation } = useMutation({
    mutationKey: ["initiate-google"],
    onMutate: () => {
      setLoading(true);
    },
    mutationFn: request.GoogleInitiate,
    onSuccess: (response) => {
      if (response) {
        if (typeof window !== "undefined") {
          window.location.href = response.data.url;
        }
        setMessage(response.message);
        success(response.message)
      }
    },
    onError: (err) => {
      if (err) {
        setMessage(err.message);
        error(err.message)
      }
    },
    onSettled: () => {
      setLoading(false);
    },
  });
  const { mutateAsync: googleCallbackMutation } = useMutation({
    mutationKey: ["google-callback"],
    onMutate: () => {
      setLoading(true);
    },
    mutationFn: request.GoogleCallback,
    onSuccess: (response) => {
      if (response) {
        router.push("/signin");
        setMessage(response.message);
        success(response.message)
      }
    },
    onError: (err) => {
      if (err) {
        setMessage(err.message);
        error(err.message)
      }
    },
    onSettled: () => {
      setLoading(false);
    },
  });

  //upload
  const { mutateAsync: uploadMutation } = useMutation({
    onMutate: () => {
      setLoading(true);
    },
    mutationFn: request.upload,
    onSuccess: (response) => {
      if (response) {
        setMessage(response.message);
        success(response.message)
      }
    },
    onError: (err) => {
      if (error) {
        setMessage(err.message);
        error(err.message)
      }
    },
    onSettled: () => {
      setLoading(false);
    },
  });

  //Categories

  return {
    login: (data: Login) => loginMutation(data),
    signUp: (data: SignUp) => signUpMutation(data),
    verifyEmail: (data: VerifyEmail) => verifyEmailMutation(data),
    initiateResetPassword: (data: InitiateResetPassword) =>
      initiateResetPasswordMutation(data),
    resetPassword: (data: ResetPassword) => resetPasswordMutation(data),
    upload: (files: File) => uploadMutation(files),
    initiateGoogle: () => initiateGoogleMutation(),
    googleCallback: (data: GoogleCallback) => googleCallbackMutation(data),
  };
};
