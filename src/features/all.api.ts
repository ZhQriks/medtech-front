import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { APP_BACKEND_URL } from "../constants/constants";

export const allApi = createApi({
  reducerPath: "allApi",
  baseQuery: fetchBaseQuery({
    baseUrl: APP_BACKEND_URL,
    prepareHeaders: (headers) => {
      const user = JSON.parse(localStorage.getItem("user") as string);
      if (user && user.access_token) {
        headers.set("Authorization", `Bearer ${user.access_token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAllClinics: builder.query<any, void>({
      query: () => `clinics`,
    }),
    getAllCities: builder.query<any, void>({
      query: () => `cities`,
    }),
    getAllSpecializations: builder.query<any, void>({
      query: () => `specializationTypes`,
    }),
  }),
});

export const {
  useGetAllCitiesQuery,
  useGetAllClinicsQuery,
  useGetAllSpecializationsQuery,
} = allApi;
