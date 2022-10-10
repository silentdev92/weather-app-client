import React, { FC } from 'react'
import { getFormattedTime } from '../../helpers/dateTime'
import { getWeatherIconUrl } from '../../helpers/getWeatherIconUrl'
import { getTempUnits } from '../../helpers/units'
import { useAppSelector } from '../../hooks/redux'
import { selectUnits } from '../../store/weather/selectors'
import { ForecastWeatherData } from '../../store/weather/types'
import styles from './ForecastSmallCard.module.sass'

interface ForecastSmallCardProps {
  weather: ForecastWeatherData['list'][0]
}

const ForecastSmallCard: FC<ForecastSmallCardProps> = ({ weather }) => {
  const units = useAppSelector(selectUnits)

  return (
    <div className={styles.root}>
      <span className={styles.time}>{getFormattedTime(weather.dt)}</span>
      <div className={styles.icon}>
        <img
          src={getWeatherIconUrl(weather.weather[0].icon)}
          alt="Weather Icon"
        />
      </div>
      <span className={styles.temp}>
        {Math.round(weather.main.temp)} {getTempUnits(units)}
      </span>
    </div>
  )
}

export default ForecastSmallCard
