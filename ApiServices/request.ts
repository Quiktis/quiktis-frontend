import { Upload } from "lucide-react";
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
  CreateEventData,
  CreateEventResponse,
  MediaUploadResponse,
  GetAllEventsResponse
} from "../app/types";
import { crudRequest } from "./crud-requests";
import { AUTH_ENDPOINTS } from "./route";
import { TokenService } from "./token-service";

export const request = {

  uploadMedia: async (file: File): Promise<MediaUploadResponse> => {
    const formData = new FormData();
    formData.append("files", file);
    const response = await crudRequest.POST<FormData, MediaUploadResponse>(
      AUTH_ENDPOINTS.UPLOAD_MEDIA,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  },

  createEvent: async (data: CreateEventData): Promise<CreateEventResponse> => {
    const response = await crudRequest.POST<
      CreateEventData,
      CreateEventResponse
    >(AUTH_ENDPOINTS.EVENTS, data);
    return response.data;
  },

  signup: async (data: SignUp): Promise<SignupResponse> => {
    const response = await crudRequest.POST<SignUp, SignupResponse>(
      AUTH_ENDPOINTS.SIGNUP,
      data
    );
    return response.data;
  },

  getAllEvents: async (): Promise<GetAllEventsResponse> => {
    const response = await crudRequest.GET<GetAllEventsResponse>(
      AUTH_ENDPOINTS.EVENTS
    );
    return response.data;
  },

  getAllUserEvents: async (userId: string): Promise<GetAllEventsResponse> => {
    const response = await crudRequest.GET<GetAllEventsResponse>(
      `${AUTH_ENDPOINTS.EVENTS}/user/${userId}`
    );
    return response.data;
  },

  getEventById: async (eventId: string): Promise<CreateEventResponse> => {
    const response = await crudRequest.GET<CreateEventResponse>(
      `${AUTH_ENDPOINTS.EVENTS}/${eventId}`
    );
    return response.data;
  },

  login: async (data: Login): Promise<LoginResponse> => {
    try {
      const response = await crudRequest.POST<Login, LoginResponse>(
        AUTH_ENDPOINTS.LOGIN,
        data
      );

      if (response?.data?.data?.token) {
        TokenService.setCookie(response.data.data.token);
      } else {
        console.warn("[DEBUG] No token found in response:", response.data);
      }

      return response.data;
    } catch (error: any) {
      console.error("[DEBUG] login() failed:", error?.response || error);
      throw error;
    }
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
};
