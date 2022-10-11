import React, { FC, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { LocationForm } from '../../components/LocationForm'
import { Card } from '../../components/ui/Card'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { selectCurrentLocation } from '../../store/location/selectors'
import {
  addToRecentLocations,
  setCurrentLocation,
} from '../../store/location/slice'
import { LocationData } from '../../store/location/types'
import styles from './Welcome.module.sass'

const Welcome: FC = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const location = useAppSelector(selectCurrentLocation)

  const selectLocationHandler = (location: LocationData) => {
    dispatch(setCurrentLocation(location))
    dispatch(addToRecentLocations(location))
    navigate('/' + location.name.toLowerCase())
  }

  useEffect(() => {
    if (location) {
      navigate('/' + location.name.toLowerCase())
    }
  }, [location])

  return (
    <Card>
      <LocationForm onSubmit={selectLocationHandler} />
    </Card>
  )
}

export default Welcome
