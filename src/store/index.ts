import { configureStore } from '@reduxjs/toolkit'
import locationReducer from './location/slice'
import { locationApi } from './location/api'
import { weatherApi } from './weather/api'
import { getPreloadedState, localStorageMiddleware } from './middleware'

export const store = configureStore({
  reducer: {
    location: locationReducer,
    [locationApi.reducerPath]: locationApi.reducer,
    [weatherApi.reducerPath]: weatherApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      locationApi.middleware,
      weatherApi.middleware,
      localStorageMiddleware
    ),
  preloadedState: getPreloadedState(),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
