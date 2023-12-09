// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// export const dateApi = createApi({
//   reducerPath: "dateApi",
//   baseQuery: fetchBaseQuery({
//     baseUrl: "http://localhost:3000/api",
//   }),
//   endpoints: (builder) => ({
//     addDate: builder.mutation({
//       query: (body: {
//         userid: string;
//         title: string;
//         start: Date;
//         allDay: boolean;
//         end: Date;
//       }) => ({
//         url: "/calendar/create",
//         method: "post",
//         body: body,
//       }),
//     }),
//     getEvents: builder.query({
//       query: () => "/calendar", 
//     }),
//   }),
// });

// export const { useAddDateMutation } = dateApi;
