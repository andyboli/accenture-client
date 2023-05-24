import axios from "axios";
import type { BaseQueryFn } from "@reduxjs/toolkit/query";
import type { AxiosRequestConfig, AxiosError } from "axios";

const REQUESTS_TIMEOUT_IN_MILLISECONDS = 10000;
const BASE_URL = "accenture-service";

interface AxiosBaseQueryError {
  status?: number;
  data: any;
}

const axiosBaseQuery =
  <T>(
    baseUrl = BASE_URL
  ): BaseQueryFn<
    {
      bodyParams?: AxiosRequestConfig["data"];
      method: AxiosRequestConfig["method"];
      queryParams?: AxiosRequestConfig["params"];
      url: string;
    },
    { result: T },
    AxiosBaseQueryError
  > =>
  async ({ url, method, bodyParams, queryParams }) => {
    try {
      const result = await axios({
        url: baseUrl + url,
        method,
        data: bodyParams,
        params: queryParams,
        timeout: REQUESTS_TIMEOUT_IN_MILLISECONDS,
        // accenture-service headers authorization
      });

      return { data: result.data };
    } catch (axiosError) {
      const err = axiosError as AxiosError;

      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

export { axiosBaseQuery };
