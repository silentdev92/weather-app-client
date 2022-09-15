import React, { FC } from 'react'
import { getWeatherIconUrl } from '../../helpers/getWeatherIconUrl'
import styles from './ForecastSmallCard.module.sass'

const ForecastSmallCard: FC = () => {
  return (
    <div className={styles.root}>
      <span className={styles.time}>now</span>
      <div className={styles.icon}>
        <img src={getWeatherIconUrl('02n')} alt="Weather Icon" />
      </div>
      <span className={styles.temp}>19 °</span>
    </div>
  )
}

export default ForecastSmallCard
