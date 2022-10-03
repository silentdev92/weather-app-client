import { Action, Dispatch, MiddlewareAPI } from '@reduxjs/toolkit'

export const localStorageMiddleware =
  (store: MiddlewareAPI) =>
  (next: Dispatch) =>
  <A extends Action>(action: A) => {
    const result = next(action)
    const location = store.getState().location
    localStorage.setItem('locationState', JSON.stringify(location))
    return result
  }

export const getPreloadedState = () => {
  const locationState = localStorage.getItem('locationState')
  if (locationState)
    return {
      location: JSON.parse(locationState),
    }
}
