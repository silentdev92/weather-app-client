import React, { useState } from 'react'
import classNames from 'classnames/bind'
import { getWeatherIconUrl } from '../../helpers/getWeatherIconUrl'
import { Card } from '../ui/Card'
import styles from './ForecastDetailCard.module.sass'
import { Icon } from '../ui/Icon'

let cx = classNames.bind(styles)

type Display = 'short' | 'detail'

const ForecastDetailCard = () => {
  const [display, setDisplay] = useState<Display>('short')

  const changeDisplay = () => {
    if (display === 'short') setDisplay('detail')
    else setDisplay('short')
  }

  return (
    <div className={cx('root', display)} onClick={changeDisplay}>
      <Card>
        <div className={styles.main}>
          <span>Tommorow</span>
          <div className={styles.right}>
            <span className={styles.temp}>22 °</span>
            <div className={styles.icon}>
              <img src={getWeatherIconUrl('02n')} alt="Weather Icon" />
            </div>
          </div>
        </div>
        <div className={styles.secondary}>
          <div className={styles.content}>
            <div className={styles.item}>
              <div className={styles.icon}>
                <Icon img="umbrella" />
              </div>
              <span className={styles.value}>1 cm</span>
            </div>
            <div className={styles.item}>
              <div className={styles.icon}>
                <Icon img="wind" />
              </div>
              <span className={styles.value}>15 km/h</span>
            </div>
            <div className={styles.item}>
              <div className={styles.icon}>
                <Icon img="humidity" />
              </div>
              <span className={styles.value}>50 %</span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default ForecastDetailCard
