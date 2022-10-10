import React, { FC, useEffect } from 'react'
import { CurrentPrimaryCard } from '../../components/CurrentPrimaryCard'
import { CurrentSecondaryCard } from '../../components/CurrentSecondaryCard'
import { ForecastShort } from '../../components/ForecastShort'
import { OptionsCard } from '../../components/OptionsCard'
import { getSpeedUnits } from '../../helpers/units'
import { useAppSelector } from '../../hooks/redux'
import { selectCurrentLocation } from '../../store/location/selectors'
import { useLazyGetCurrentWeatherQuery } from '../../store/weather/api'
import { selectUnits } from '../../store/weather/selectors'
import styles from './Home.module.sass'

const Home: FC = () => {
  const location = useAppSelector(selectCurrentLocation)
  const units = useAppSelector(selectUnits)

  const [fetchCurrentWeather, { data, isSuccess }] =
    useLazyGetCurrentWeatherQuery()

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
        {isSuccess && (
          <CurrentPrimaryCard location={location!} weather={data!} />
        )}
      </div>
      <div>
        <CurrentSecondaryCard
          icon="umbrella"
          title="RainFall"
          value={(data?.rain ? data.rain['1h'] : '0') + ' mm'}
        />
      </div>
      <div>
        <CurrentSecondaryCard
          icon="wind"
          title="Wind"
          value={data?.wind.speed + ' ' + getSpeedUnits(units)}
        />
      </div>
      <div>
        <CurrentSecondaryCard
          icon="humidity"
          title="Humidity"
          value={data?.main.humidity + ' %'}
        />
      </div>
      <div className={styles.forecastShort}>
        <ForecastShort />
      </div>
    </div>
  )
}

export default Home
