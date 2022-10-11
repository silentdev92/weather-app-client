import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {
  CurrentWeatherData,
  ForecastWeatherData,
  GetCurrentWeatherQuery,
  GetForecastWeatherQuery,
} from './types'

const baseUrl = import.meta.env.VITE_BASE_API_URL

export const weatherApi = createApi({
  reducerPath: 'weather/api',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCurrentWeather: builder.query<
      CurrentWeatherData,
      GetCurrentWeatherQuery
    >({
      query: (query: GetCurrentWeatherQuery) => ({
        url: '/current',
        params: {
          ...query,
        },
      }),
    }),
    getForecastWeather: builder.query<
      ForecastWeatherData,
      GetForecastWeatherQuery
    >({
      query: (query: GetForecastWeatherQuery) => ({
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
