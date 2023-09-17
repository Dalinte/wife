import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {LOCALSTORAGE_OPENAI_API_KEY} from "../consts/global.consts";

const baseQuery = fetchBaseQuery({
    baseUrl: 'https://api.openai.com/v1/',
    prepareHeaders: (headers) => {
        const OPENAI_API_KEY = localStorage.getItem(LOCALSTORAGE_OPENAI_API_KEY)
        headers.set("Content-Type", `application/json`);
        headers.set("authorization", `Bearer ${OPENAI_API_KEY}`);
        return headers;
    },
})

export const api = createApi({
    baseQuery,
    endpoints: () => ({}),
})
