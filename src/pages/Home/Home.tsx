import React, { FC, useEffect, useMemo } from 'react'
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

  const [
    fetchCurrentWeather,
    { data, isSuccess, isLoading, isFetching, isError },
  ] = useLazyGetCurrentWeatherQuery()

  useEffect(() => {
    if (location) {
      fetchCurrentWeather({ lat: location.lat, lon: location.lon, units })
    }
  }, [location, units])

  const show = useMemo(
    () => isSuccess && !isLoading && !isFetching && !isError,
    [isSuccess, isLoading, isFetching, isError]
  )

  return (
    <div className={styles.root}>
      <div className={styles.optionsCard}>
        <OptionsCard />
      </div>
      <div className={styles.currentPrimaryCard}>
        <CurrentPrimaryCard location={location!} weather={data!} show={show} />
      </div>
      <div>
        <CurrentSecondaryCard
          icon="umbrella"
          title="RainFall"
          value={(data?.rain ? data.rain['1h'] : '0') + ' mm'}
          show={show}
        />
      </div>
      <div>
        <CurrentSecondaryCard
          icon="wind"
          title="Wind"
          value={data?.wind.speed + ' ' + getSpeedUnits(units)}
          show={show}
        />
      </div>
      <div>
        <CurrentSecondaryCard
          icon="humidity"
          title="Humidity"
          value={data?.main.humidity + ' %'}
          show={show}
        />
      </div>
      <div className={styles.forecastShort}>
        <ForecastShort />
      </div>
    </div>
  )
}

export default Home
