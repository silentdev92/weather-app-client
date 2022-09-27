import { configureStore } from '@reduxjs/toolkit'
import { locationApi } from './location/api'
import locationReducer from './location/slice'

export const store = configureStore({
  reducer: {
    location: locationReducer,
    [locationApi.reducerPath]: locationApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(locationApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
