import { WeatherState } from './types'
import { createSlice } from '@reduxjs/toolkit'

const initialState: WeatherState = {
  units: 'standard',
}

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    toggleUnits(state) {
      if (state.units === 'standard') state.units = 'metric'
      else if (state.units === 'metric') state.units = 'imperial'
      else if (state.units === 'imperial') state.units = 'standard'
    },
  },
})

export const { toggleUnits } = weatherSlice.actions
export default weatherSlice.reducer
