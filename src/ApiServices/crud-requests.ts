import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { TokenService } from "./token-service";

const token = TokenService.getCookie();
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "Application/json",
  },
});
axiosInstance.interceptors.request.use(
  (config) => {
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.log(error);
  }
);
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
    if (error.response) {
      const status = error.response.status;
      switch (status) {
        case 401:
          TokenService.removeCookie();
          window.location.href = "/login";
          break;
        case 403:
          break;
        case 404:
          break;
        case 500:
          break;
        default:
      }
    } else if (error.request) {
      console.log("Network error");
    } else {
      console.log("something happened");
    }
    return "error";
  }
);
export const crudRequest = {
  GET: <R>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<R>> => {
    return axiosInstance.get<R>(url, config);
  },
  POST: <T, R>(
    url: string,
    data: T,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<R>> => {
    return axiosInstance.post<R>(url, data, config);
  },
  PATCH: <T>(
    url: string,
    data: T,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse> => {
    return axiosInstance.patch<T>(url, data, config);
  },
  PUT: <T>(
    url: string,
    data: T,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse> => {
    return axiosInstance.put<T>(url, data, config);
  },
  DELETE: <T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse> => {
    return axiosInstance.delete<T>(url, config);
  },
};
