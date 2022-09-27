import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { getLocationQuery, LocationData, LocationResponse } from './types'

const baseUrl = import.meta.env.VITE_BASE_API_URL

export const locationApi = createApi({
  reducerPath: 'location/api',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getLocation: builder.query<LocationResponse[], getLocationQuery>({
      query: (query: getLocationQuery) => ({
        url: '/location',
        params: {
          ...query,
        },
      }),
      transformResponse: (response: LocationData[]) => {
        return response.map((loc) => ({ ...loc, id: Date.now() }))
      },
    }),
  }),
})

export const { useLazyGetLocationQuery } = locationApi
