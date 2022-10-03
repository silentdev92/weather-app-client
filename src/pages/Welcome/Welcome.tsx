import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { LocationForm } from '../../components/LocationForm'
import { Card } from '../../components/ui/Card'
import { useAppDispatch } from '../../hooks/redux'
import {
  addToRecentLocations,
  setCurrentLocation,
} from '../../store/location/slice'
import { LocationData } from '../../store/location/types'
import styles from './Welcome.module.sass'

const Welcome: FC = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const selectLocationHandler = (location: LocationData) => {
    dispatch(setCurrentLocation(location))
    dispatch(addToRecentLocations(location))
    const name = location.name.toLowerCase()
    navigate('/' + name)
  }

  return (
    <Card>
      <LocationForm onSubmit={selectLocationHandler} />
    </Card>
  )
}

export default Welcome
