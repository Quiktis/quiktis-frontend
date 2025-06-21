import { useState } from "react";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

interface RequestParams {
  url: string;
  method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | "OPTIONS";
  body?: any;
  headers?: Record<string, string>;
  retryCount?: number;
  withCredentials?: boolean; // NEW: for handling credentials
}

const customErrors = [
  {
    error: "Network Error",
    message: "Please check your internet connection",
    redirect: false,
  },
  {
    error: "User with this email already exists",
    message: "User already exists. Please login",
    redirectStatus: "user exists",
    redirect: true,
  },
  {
    error: "Invalid credentials",
    message: "Invalid email or password",
    redirect: false,
  },
  {
    error: "Request failed with status code 500",
    message: "An error occurred, please try again",
    redirect: false,
  },
];

const getCustomError = (incomingError: string) => {
  return customErrors.find((e) => e.error === incomingError) || null;
};

const useAxios = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const sendRequest = async ({
    url,
    method = "GET",
    body = null,
    headers = {},
    retryCount = 0,
    withCredentials = false, // default to false
  }: RequestParams): Promise<any> => {
    if (retryCount > 3) {
      console.error("Max retry attempts reached. Request failed.");
      setError("Authentication error, please log in again.");
      return null;
    }

    setLoading(true);
    setError(null);

    try {
      const config: AxiosRequestConfig = {
  url,
  method,
  ...(body ? { data: body } : {}),
  headers: {
    ...(!body || !(body instanceof FormData)
      ? { "Content-Type": "application/json" }
      : {}),
    ...headers,
  },
  withCredentials,
};


      const response: AxiosResponse = await axios(config);
      setData(response.data);
      return response.data;

    } catch (err: any) {
      console.log(err);
      const rawError = err?.response?.data?.message || err.message;
      const matchedError = getCustomError(rawError);
      const friendlyMessage =
        matchedError?.message || rawError || "An error occurred, please try again.";

      console.error("Error sending request:", rawError);
      setError(friendlyMessage);

      return {
        status: "error",
        message: friendlyMessage,
        error: rawError,
        redirect: matchedError?.redirect === true,
        redirectStatus: matchedError?.redirectStatus,
      };
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, setLoading, error, sendRequest };
};

export default useAxios;
