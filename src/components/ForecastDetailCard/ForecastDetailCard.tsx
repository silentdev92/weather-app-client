import React, { FC, useState } from 'react'
import classNames from 'classnames/bind'
import { getWeatherIconUrl } from '../../helpers/getWeatherIconUrl'
import { Card } from '../ui/Card'
import styles from './ForecastDetailCard.module.sass'
import { Icon } from '../ui/Icon'
import { ForecastWeatherData } from '../../store/weather/types'
import { getFormattedDateTime } from '../../helpers/dateTime'
import { useAppSelector } from '../../hooks/redux'
import { selectUnits } from '../../store/weather/selectors'
import { getSpeedUnits, getTempUnits } from '../../helpers/units'

let cx = classNames.bind(styles)

type Display = 'short' | 'detail'

interface ForecastDetailCardProps {
  weather: ForecastWeatherData['list'][0]
}

const ForecastDetailCard: FC<ForecastDetailCardProps> = ({ weather }) => {
  const units = useAppSelector(selectUnits)

  const [display, setDisplay] = useState<Display>('short')

  const changeDisplay = () => {
    if (display === 'short') setDisplay('detail')
    else setDisplay('short')
  }

  return (
    <div className={cx('root', display)} onClick={changeDisplay}>
      <Card>
        <div className={styles.main}>
          <span>{getFormattedDateTime(weather.dt)}</span>
          <div className={styles.right}>
            <span className={styles.temp}>
              {Math.round(weather.main.temp)} {getTempUnits(units)}
            </span>
            <div className={styles.icon}>
              <img
                src={getWeatherIconUrl(weather.weather[0].icon)}
                alt="Weather Icon"
              />
            </div>
          </div>
        </div>
        <div className={styles.secondary}>
          <div className={styles.content}>
            <div className={styles.item}>
              <div className={styles.icon}>
                <Icon img="umbrella" />
              </div>
              <span className={styles.value}>
                {(weather.rain ? weather.rain['3h'] : '0') + ' mm'}
              </span>
            </div>
            <div className={styles.item}>
              <div className={styles.icon}>
                <Icon img="wind" />
              </div>
              <span className={styles.value}>
                {weather.wind.speed} {getSpeedUnits(units)}
              </span>
            </div>
            <div className={styles.item}>
              <div className={styles.icon}>
                <Icon img="humidity" />
              </div>
              <span className={styles.value}>{weather.main.humidity} %</span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default ForecastDetailCard
