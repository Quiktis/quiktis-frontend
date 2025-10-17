import {
  GoogleCallback,
  GoogleCallbackResponse,
  GoogleInitiateResponse,
  InitiateResetPassword,
  InitiateResetPasswordResponse,
  Login,
  LoginInfo,
  LoginResponse,
  ResetPassword,
  ResetPasswordResponse,
  SignUp,
  SignupResponse,
  UploadResponse,
  VerifyEmail,
  VerifyResponse,
} from "../types";
import { crudRequest } from "./crud-requests";
import { AUTH_ENDPOINTS, UPLOAD_MEDIA } from "./route";
import { TokenService } from "./token-service";

export const request = {
  signup: async (data: SignUp): Promise<SignupResponse> => {
    const response = await crudRequest.POST<SignUp, SignupResponse>(
      AUTH_ENDPOINTS.SIGNUP,
      data
    );
    return response.data;
  },

  login: async (data: Login): Promise<LoginResponse> => {
    const response = await crudRequest.POST<Login, LoginResponse>(
      AUTH_ENDPOINTS.LOGIN,
      data
    );
    TokenService.setCookie(response.data.data.token);
    return response.data;
  },
  verifyEmail: async (data: VerifyEmail): Promise<VerifyResponse> => {
    const response = await crudRequest.POST<VerifyEmail, VerifyResponse>(
      AUTH_ENDPOINTS.VERIFY_EMAIL,
      data
    );
    return response.data;
  },

  resetPassword: async (
    data: ResetPassword
  ): Promise<ResetPasswordResponse> => {
    const response = await crudRequest.POST<
      ResetPassword,
      ResetPasswordResponse
    >(AUTH_ENDPOINTS.FORGOT_PASSWORD, data);
    return response.data;
  },

  initiateResetPassword: async (
    data: InitiateResetPassword
  ): Promise<InitiateResetPasswordResponse> => {
    const response = await crudRequest.POST<
      InitiateResetPassword,
      InitiateResetPasswordResponse
    >(AUTH_ENDPOINTS.RESET_PASSWORD, data);
    return response.data;
  },

  GoogleInitiate: async (): Promise<GoogleInitiateResponse> => {
    const response = await crudRequest.GET<GoogleInitiateResponse>(
      AUTH_ENDPOINTS.INITIATE_GOOGLE
    );
    return response.data;
  },

  GoogleCallback: async (
    data: GoogleCallback
  ): Promise<GoogleCallbackResponse> => {
    const response = await crudRequest.POST<
      GoogleCallback,
      GoogleCallbackResponse
    >(AUTH_ENDPOINTS.GOOGLE_CALLBACK, data);
    TokenService.setCookie(response.data.data.token);
    return response.data;
  },

  upload: async (files: File): Promise<UploadResponse> => {
    const response = await crudRequest.POST<File, UploadResponse>(
      UPLOAD_MEDIA.MEDIA,
      files
    );
    return response.data;
  },
};
