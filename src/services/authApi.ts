import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api/v1/user/auth",
  }),
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (body: { email: string; password: string }) => {
        console.log("dispatch")
        console.log(body);
        return {
         
          url: "/login",
          method: "post",

          body:body,
        };
      },
    }),
  }),
});

export const { useLoginUserMutation } = authApi;
