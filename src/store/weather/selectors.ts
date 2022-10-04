import { RootState } from './../index'
export const selectWeatherState = (state: RootState) => state.weather

export const selectUnits = (state: RootState) => selectWeatherState(state).units
