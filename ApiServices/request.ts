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
  GetAllEventsResponse,
  GetSupportedBankResponse,
  GetPayoutDetailsResponse,
  ConfirmPayoutDetailsResponse,
} from "../app/types/types";
import { crudRequest } from "./crud-requests";
import { AUTH_ENDPOINTS } from "./routes";
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

  createEvent: async (data: any): Promise<CreateEventResponse> => {
    const response = await crudRequest.POST<
      CreateEventData,
      CreateEventResponse
    >(AUTH_ENDPOINTS.EVENTS, data);
    return response.data;
  },

  deleteEvent: async (eventId: string): Promise<any> => {
    const response = await crudRequest.DELETE<any>(
      `${AUTH_ENDPOINTS.EVENTS}/${eventId}`
    );
    return response.data
  },

  signup: async (data: SignUp): Promise<SignupResponse> => {
    const response = await crudRequest.POST<SignUp, SignupResponse>(
      AUTH_ENDPOINTS.SIGNUP,
      data
    );
    return response.data;
  },

  getSupportedBanks: async (): Promise<any> => {
    const response = await crudRequest.GET<GetSupportedBankResponse>(
      AUTH_ENDPOINTS.SUPPORTED_BANKS
    );
    return response.data.data;
  },

  getPayoutDetails: async (): Promise<any> => {
    const response = await crudRequest.GET<GetPayoutDetailsResponse>(
      AUTH_ENDPOINTS.PAYOUT_DETAILS
    );
    console.log("Payout details response:", response.data.data);
    return response.data.data;
  },

  confirmPayoutDetails: async (account_number: string, bank_code: string): Promise<any> => {
    const response = await crudRequest.GET<ConfirmPayoutDetailsResponse>(
      `${AUTH_ENDPOINTS.PAYOUT_DETAILS}/confirm-details?account_num=${account_number}&bank_code=${bank_code}`,
    );
    return response.data.data;
  },

  deletePayoutDetails: async (payoutID: string | number): Promise<Response> => {
    const response = await crudRequest.DELETE<Response>(
      `AUTH_ENDPOINTS.PAYOUT_DETAILS/${payoutID}`
    );
    return response.data;
  },

  getAllEvents: async (): Promise<any> => {
    const response = await crudRequest.GET<GetAllEventsResponse>(
      AUTH_ENDPOINTS.EVENTS
    );
    return response.data.data.events;
  },

  getAllUserEvents: async (userId: string): Promise<any> => {
    const response = await crudRequest.GET<GetAllEventsResponse>(
      `${AUTH_ENDPOINTS.EVENTS}/organiser/${userId}`
    );
    return response.data.data.events;
  },

  getEventById: async (eventId: string): Promise<any> => {
    const response = await crudRequest.GET<any>(
      `${AUTH_ENDPOINTS.EVENTS}/${eventId}`
    );
    return response.data.data.event;
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
