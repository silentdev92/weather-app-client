import React, { FC, useEffect } from 'react'
import { CurrentPrimaryCard } from '../../components/CurrentPrimaryCard'
import { CurrentSecondaryCard } from '../../components/CurrentSecondaryCard'
import { ForecastShort } from '../../components/ForecastShort'
import { OptionsCard } from '../../components/OptionsCard'
import { useAppSelector } from '../../hooks/redux'
import { selectCurrentLocation } from '../../store/location/selectors'
import { useLazyGetCurrentWeatherQuery } from '../../store/weather/api'
import { selectUnits } from '../../store/weather/selectors'
import styles from './Home.module.sass'

const Home: FC = () => {
  const location = useAppSelector(selectCurrentLocation)
  const units = useAppSelector(selectUnits)

  const [fetchCurrentWeather, { data }] = useLazyGetCurrentWeatherQuery()

  useEffect(() => {
    if (location) {
      fetchCurrentWeather({ lat: location.lat, lon: location.lon, units })
    }
  }, [location, units])

  return (
    <div className={styles.root}>
      <div className={styles.optionsCard}>
        <OptionsCard />
      </div>
      <div className={styles.currentPrimaryCard}>
        <CurrentPrimaryCard />
      </div>
      <div>
        <CurrentSecondaryCard icon="umbrella" title="RainFall" value="3 cm" />
      </div>
      <div>
        <CurrentSecondaryCard
          icon="wind"
          title="Wind"
          value={data?.wind.speed + 'm/s'}
        />
      </div>
      <div>
        <CurrentSecondaryCard
          icon="humidity"
          title="Humidity"
          value={data?.main.humidity + '%'}
        />
      </div>
      <div className={styles.forecastShort}>
        <ForecastShort />
      </div>
    </div>
  )
}

export default Home
