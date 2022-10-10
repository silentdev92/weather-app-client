import { LocationData, LocationState } from './types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: LocationState = {
  current: null,
  recent: [],
}

const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    setCurrentLocation(state, action: PayloadAction<LocationData | null>) {
      state.current = action.payload
    },
    addToRecentLocations(state, action: PayloadAction<LocationData>) {
      const isRecent = state.recent.find((loc) => loc.id === action.payload.id)
      if (!isRecent) {
        if (state.recent.length >= 5) state.recent.pop()
        state.recent.unshift(action.payload)
      }
    },
    removeRecentLocation(state, action: PayloadAction<number>) {
      state.recent = state.recent.filter((loc) => loc.id !== action.payload)
      if (state.current?.id === action.payload) state.current = null
    },
  },
})

export const {
  setCurrentLocation,
  addToRecentLocations,
  removeRecentLocation,
} = locationSlice.actions
export default locationSlice.reducer
