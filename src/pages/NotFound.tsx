import React, { FC } from 'react'
import { Navigate } from 'react-router-dom'
import { useAppSelector } from '../hooks/redux'
import { selectCurrentLocation } from '../store/location/selectors'

const NotFound: FC = () => {
  const location = useAppSelector(selectCurrentLocation)

  if (location) {
    return <Navigate to={'/' + location.name.toLowerCase()} />
  } else {
    return <Navigate to={'/'} />
  }
}

export default NotFound
