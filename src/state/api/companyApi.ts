import { BaseQueryApi, createApi } from "@reduxjs/toolkit/query/react";

import { axiosBaseQuery } from "./axiosBaseQuery";
import {
  Company,
  mockCompanies,
  ReadCompaniesRequest,
  ReadCompaniesResponse,
} from "../../entities/Company";

const CACHE_TIMEOUT_IN_SECONDS = 1.8e3;
const KEEP_CACHE_WITHOUT_SUBSCRIPTIONS_TIMEOUT_IN_SECONDS = 1.8e3;
/* const COMPANY_ENDPOINT = "/company"; */

const getCompanies = async (
  api: BaseQueryApi
): Promise<ReadCompaniesResponse> => {
  // To Do: Connect With Accenture-Service
  /* const { data, error } = await axiosBaseQuery<ReadCompaniesResponse>()(
      { url: COMPANY_ENDPOINT, method: "GET", bodyParams },
      api,
      {}
    ); */
  const companies = mockCompanies();
  return { data: companies, error: "" };
};

export const companyApi = createApi({
  baseQuery: axiosBaseQuery(),
  keepUnusedDataFor: KEEP_CACHE_WITHOUT_SUBSCRIPTIONS_TIMEOUT_IN_SECONDS,
  reducerPath: "companyApi",
  refetchOnMountOrArgChange: CACHE_TIMEOUT_IN_SECONDS,
  tagTypes: ["company"],
  endpoints: (build) => ({
    getCompanies: build.query<Company[], ReadCompaniesRequest>({
      queryFn: async (_, api) => {
        try {
          const { data, error } = await getCompanies(api);
          // To Do: Map Applications Erros
          if (error) throw new Error(error);
          return { data };
        } catch (error: any) {
          return { error: error.message as string };
        }
      },
      providesTags: ["company"],
    }),
  }),
});

export const { useGetCompaniesQuery, endpoints } = companyApi;

export default companyApi;
