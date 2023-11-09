import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const dateApi = createApi({
  reducerPath: "dateApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api",
  }),
  endpoints: (builder) => ({
    addDate: builder.mutation<string, {  // Specify the expected return type (string)
      userid: string,
      title: string,
      start: Date,
      allDay: boolean,
      end: Date
    }>({
      query: (body) => ({
        url: "/calendar/create", 
        method: "post",
        body: body,
      }),
    }),
  }),
});

export const useAddDateMutation  = dateApi;
