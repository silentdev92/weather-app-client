import { Action, Dispatch, MiddlewareAPI } from '@reduxjs/toolkit'
import { LocationState } from './location/types'
import { WeatherState } from './weather/types'

export const localStorageMiddleware =
  (store: MiddlewareAPI) =>
  (next: Dispatch) =>
  <A extends Action>(action: A) => {
    const result = next(action)
    const actionType = action.type.split('/')

    if (actionType[0] === 'location' && actionType[1] !== 'api') {
      const location = store.getState().location
      localStorage.setItem('locationState', JSON.stringify(location))
    }
    if (actionType[0] === 'weather' && actionType[1] !== 'api') {
      const weather = store.getState().weather
      localStorage.setItem('weatherState', JSON.stringify(weather))
    }

    return result
  }

export const getPreloadedState = () => {
  const locationState = localStorage.getItem('locationState')
  const weatherState = localStorage.getItem('weatherState')

  const preloadedState: {
    location?: LocationState
    weather?: WeatherState
  } = {}

  if (locationState) preloadedState.location = JSON.parse(locationState)
  if (weatherState) preloadedState.weather = JSON.parse(weatherState)

  return preloadedState
}
