import { configureStore } from '@reduxjs/toolkit'
import locationReducer from './location/slice'
import { locationApi } from './location/api'
import { weatherApi } from './weather/api'

export const store = configureStore({
  reducer: {
    location: locationReducer,
    [locationApi.reducerPath]: locationApi.reducer,
    [weatherApi.reducerPath]: weatherApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      locationApi.middleware,
      weatherApi.middleware
    ),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
