import { useState } from "react";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

interface RequestParams {
  url: string;
  method?: "GET" | "POST" | "PUT" | "DELETE";
  body?: any;
  headers?: Record<string, string>;
  retryCount?: number;
}

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
  }: RequestParams): Promise<any> => {
    if (retryCount > 3) {
      console.error("Max retry attempts reached. Request failed.");
      setError("Authentication error, please log in again.");
      return null;
    }

    setLoading(true);
    setError(null);

    console.log("Sending request from useAxios hook");

    try {
      const config: AxiosRequestConfig = {
        url,
        method,
        data: body,
        headers: {
          "Content-Type": "application/json",
          ...headers,
        },
        withCredentials: true,
      };

      const response: AxiosResponse = await axios(config);
      setData(response.data);
      return response.data;
    } catch (err: any) {
      console.error("Error sending request:", err?.response?.data || err.message);
      setError("An error occurred");

      return null;
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, sendRequest };
};

export default useAxios;
