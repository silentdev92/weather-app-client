import React, { FC } from 'react'
import { LocationForm } from '../../components/LocationForm'
import { Card } from '../../components/ui/Card'
import { useAppDispatch } from '../../hooks/redux'
import { usePageNavigation } from '../../hooks/usePageNavigation'
import {
  addToRecentLocations,
  setCurrentLocation,
} from '../../store/location/slice'
import { LocationData } from '../../store/location/types'
import styles from './Welcome.module.sass'

const Welcome: FC = () => {
  const dispatch = useAppDispatch()
  const { navigateToHomePage } = usePageNavigation()

  const selectLocationHandler = (location: LocationData) => {
    dispatch(setCurrentLocation(location))
    dispatch(addToRecentLocations(location))
    navigateToHomePage()
  }

  return (
    <Card>
      <LocationForm onSubmit={selectLocationHandler} />
    </Card>
  )
}

export default Welcome
