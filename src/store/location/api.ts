import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { GetLocationQuery, LocationData } from './types'

const baseUrl = import.meta.env.VITE_BASE_API_URL

export const locationApi = createApi({
  reducerPath: 'location/api',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getLocation: builder.query<LocationData[], GetLocationQuery>({
      query: (query: GetLocationQuery) => ({
        url: '/location',
        params: {
          ...query,
        },
      }),
    }),
  }),
})

export const { useLazyGetLocationQuery } = locationApi
