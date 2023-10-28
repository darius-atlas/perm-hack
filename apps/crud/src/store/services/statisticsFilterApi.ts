import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const statisticsFilterApi = createApi({
    reducerPath: "statFilterApi",
    baseQuery: fetchBaseQuery({baseUrl: "https://ayin.k-lab.su/api/analytics"}),
    endpoints: (build) => ({
        getDate: build.mutation({
            query: (data) => ({
                url: '/all',
                method: 'POST',
                body: data,
            }),
        }),
    }),
})
export const {useGetDateMutation} = statisticsFilterApi
