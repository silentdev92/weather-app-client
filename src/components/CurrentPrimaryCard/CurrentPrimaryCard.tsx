import React, { FC } from 'react'
import { getFormattedDate } from '../../helpers/dateTime'
import { getWeatherIconUrl } from '../../helpers/getWeatherIconUrl'
import { LocationData } from '../../store/location/types'
import { CurrentWeatherData } from '../../store/weather/types'
import { Card } from '../ui/Card'
import styles from './CurrentPrimaryCard.module.sass'

interface CurrentPrimaryCardProps {
  location: LocationData
  weather: CurrentWeatherData
}

const CurrentPrimaryCard: FC<CurrentPrimaryCardProps> = ({
  location,
  weather,
}) => {
  return (
    <Card>
      <div className={styles.root}>
        <div className={styles.left}>
          <span className={styles.location}>
            {location.name},
            <br />
            {location.country.name}
          </span>
          <span className={styles.date}>{getFormattedDate(weather.dt)}</span>
        </div>
        <div className={styles.right}>
          <div className={styles.content}>
            <div className={styles.icon}>
              <img
                src={getWeatherIconUrl(weather.weather[0].icon)}
                alt="Weather Icon"
              />
            </div>
            <div className={styles.main}>
              <span className={styles.temp}>
                {Math.round(weather.main.temp)}
                <span className={styles.unit}>°C</span>
              </span>
              <span className={styles.desc}>{weather.weather[0].main}</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default CurrentPrimaryCard
