import React, { FC, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Outlet, useParams } from 'react-router-dom'
import { useAppSelector } from '../../hooks/redux'
import { usePageNavigation } from '../../hooks/usePageNavigation'
import { selectCurrentLocation } from '../../store/location/selectors'
import styles from './MainLayout.module.sass'

const MainLayout: FC = () => {
  const location = useAppSelector(selectCurrentLocation)
  const { navigateToWelcomePage, navigateToHomePage } = usePageNavigation()
  const { location: locationParam } = useParams()

  useEffect(() => {
    if (!location) {
      navigateToWelcomePage()
    }
    if (location && location?.name.toLowerCase() !== locationParam) {
      navigateToHomePage()
    }
  }, [location])

  return (
    <>
      {location && (
        <Helmet>
          <title>{location?.name} - Weather App</title>
        </Helmet>
      )}
      <div className={styles.root}>
        <div className={styles.container}>
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default MainLayout
