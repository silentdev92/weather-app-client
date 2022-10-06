import React, { FC } from 'react'
import { getWeatherIconUrl } from '../../helpers/getWeatherIconUrl'
import { ForecastWeatherData } from '../../store/weather/types'
import styles from './ForecastSmallCard.module.sass'

interface ForecastSmallCardProps {
  weather: ForecastWeatherData['list'][0]
}

const ForecastSmallCard: FC<ForecastSmallCardProps> = ({ weather }) => {
  return (
    <div className={styles.root}>
      <span className={styles.time}>{weather.dt}</span>
      <div className={styles.icon}>
        <img
          src={getWeatherIconUrl(weather.weather[0].icon)}
          alt="Weather Icon"
        />
      </div>
      <span className={styles.temp}>{Math.round(weather.main.temp)} °C</span>
    </div>
  )
}

export default ForecastSmallCard
