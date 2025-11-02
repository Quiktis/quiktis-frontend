import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { TokenService } from "./token-service";
import { BASE_URL } from "./base-urls";
import { useStore } from "@/app/lib/store";

console.log("[AXIOS DEBUG] Initializing axios instance with BASE_URL:", BASE_URL);

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const store = useStore.getState();
// 🟢 REQUEST INTERCEPTOR
axiosInstance.interceptors.request.use(
  (config) => {
    const token = TokenService.getCookie(); 
    /*console.log("[AXIOS DEBUG] Outgoing request:", {
      url: `${config.baseURL}${config.url}`,
      method: config.method,
      headers: config.headers,
      data: config.data,
    });*/

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      //console.log("[AXIOS DEBUG] Authorization header set");
    } else {
      //console.warn("[AXIOS DEBUG] No token found in cookies");
    }

    return config;
  },
  (error) => {
    //console.error("[AXIOS DEBUG] Request setup error:", error);
    return Promise.reject(error);
  }
);

// 🟡 RESPONSE INTERCEPTOR
axiosInstance.interceptors.response.use(
  (response) => {
    console.log("[AXIOS DEBUG] Response received:", {
      url: response.config.url,
      status: response.status,
      data: response.data,
    });
    return response;
  },
  (error: AxiosError) => {
    
    console.error("[AXIOS DEBUG] Response error caught:", {
      url: error.config?.url,
      message: error.message,
      status: error.response?.status,
      data: error.response?.data,
    });

    if (error.response) {
      const status = error.response.status;
      switch (status) {
        case 401:
          console.warn("[AXIOS DEBUG] 401 Unauthorized — clearing cookie and redirecting");
          TokenService.removeCookie();
          if (typeof window !== "undefined") {
            //window.location.href = "/register";
          }
          break;
        case 403:
          break;
        case 404:
          break;
        case 500:
          console.log("500 case error: ", (error.response?.data as { error: string })?.error)
          if ((error.response?.data as { error: string })?.error === "Token expired") {
            TokenService.removeCookie();
            store.setSessionExpired(true);
            store.setUser(null);
            useStore.persist.clearStorage();
          }
          break;
        default:
      }
    } 
    return Promise.reject(error);
  }
);

// 🧩 CRUD WRAPPERS
export const crudRequest = {
  GET: <R>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<R>> => {
    //console.log("[AXIOS DEBUG] crudRequest.GET called with:", url);
    return axiosInstance.get<R>(url, config);
  },
  POST: <T, R>(url: string, data: T, config?: AxiosRequestConfig): Promise<AxiosResponse<R>> => {
    //console.log("[AXIOS DEBUG] crudRequest.POST called with:", { url, data });
    return axiosInstance.post<R>(url, data, config);
  },
  PATCH: <T>(url: string, data: T, config?: AxiosRequestConfig): Promise<AxiosResponse> => {
    //console.log("[AXIOS DEBUG] crudRequest.PATCH called with:", { url, data });
    return axiosInstance.patch<T>(url, data, config);
  },
  PUT: <T>(url: string, data: T, config?: AxiosRequestConfig): Promise<AxiosResponse> => {
    //console.log("[AXIOS DEBUG] crudRequest.PUT called with:", { url, data });
    return axiosInstance.put<T>(url, data, config);
  },
  DELETE: <T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse> => {
    //console.log("[AXIOS DEBUG] crudRequest.DELETE called with:", url);
    return axiosInstance.delete<T>(url, config);
  },
};
