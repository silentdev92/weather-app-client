import { RootState } from './../index'
export const selectLocationState = (state: RootState) => state.location

export const selectCurrentLocation = (state: RootState) =>
  selectLocationState(state).current
export const selectRecentLocations = (state: RootState) =>
  selectLocationState(state).recent
