import { useRouter } from "next/router";
import { useStore } from "../lib/store";
import { useMutation } from "@tanstack/react-query";
import { request } from "./request";
import { InitiateResetPassword, Login, ResetPassword, SignUp } from "../types";

export const Mutations = () => {
  const { setLoading, setMessage, setUserId } = useStore();
  const router = useRouter();
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
        setUserId(response?.data?.user?.id);
        router.push("/");
      }
    },
    onError: (err) => {
      if (err) {
        setMessage(err.message);
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
        router.push("/verify-email");
      }
    },
    onError: (err) => {
      if (err) {
        setMessage(err.message);
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
      }
    },
    onError: (err) => {
      if (err) {
        setMessage(err.message);
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
      }
    },
    onError: (err) => {
      if (err) {
        setMessage(err.message);
      }
    },
    onSettled: () => {
      setLoading(false);
    },
  });
  return {
    login: (data: Login) => loginMutation(data),
    signUp: (data: SignUp) => signUpMutation(data),
    initiateResetPassword: (data: InitiateResetPassword) =>
      initiateResetPasswordMutation(data),
    resetPassword: (data: ResetPassword) => resetPasswordMutation(data),
  };
};
