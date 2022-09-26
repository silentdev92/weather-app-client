import React, { FC } from 'react'
import { getWeatherIconUrl } from '../../helpers/getWeatherIconUrl'
import { Card } from '../ui/Card'
import styles from './CurrentPrimaryCard.module.sass'

const CurrentPrimaryCard: FC = () => {
  return (
    <Card>
      <div className={styles.root}>
        <div className={styles.left}>
          <span className={styles.location}>
            Stockholm,
            <br />
            Sweden
          </span>
          <span className={styles.date}>Tue, Jun 30</span>
        </div>
        <div className={styles.right}>
          <div className={styles.content}>
            <div className={styles.icon}>
              <img src={getWeatherIconUrl('02n')} alt="Weather Icon" />
            </div>
            <div className={styles.main}>
              <span className={styles.temp}>19</span>
              <span className={styles.desc}>Rainy</span>
              <div className={styles.unit}>°C</div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default CurrentPrimaryCard
