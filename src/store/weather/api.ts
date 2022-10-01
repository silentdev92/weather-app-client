import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {
  CurrentWeatherData,
  ForecastWeatherData,
  getCurrentWeatherQuery,
  getForecastWeatherQuery,
} from './types'

const baseUrl = import.meta.env.VITE_BASE_API_URL

export const weatherApi = createApi({
  reducerPath: 'weather/api',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCurrentWeather: builder.query<
      CurrentWeatherData,
      getCurrentWeatherQuery
    >({
      query: (query: getCurrentWeatherQuery) => ({
        url: '/current',
        params: {
          ...query,
        },
      }),
    }),
    getForecastWeather: builder.query<
      ForecastWeatherData,
      getForecastWeatherQuery
    >({
      query: (query: getForecastWeatherQuery) => ({
        url: '/forecast',
        params: {
          ...query,
        },
      }),
    }),
  }),
})

export const { useLazyGetCurrentWeatherQuery, useLazyGetForecastWeatherQuery } =
  weatherApi
