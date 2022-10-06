import React, { FC, useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import styles from './ForecastShort.module.sass'
import { ForecastSmallCard } from '../ForecastSmallCard'
import { useLazyGetForecastWeatherQuery } from '../../store/weather/api'
import { useAppSelector } from '../../hooks/redux'
import { selectCurrentLocation } from '../../store/location/selectors'
import { selectUnits } from '../../store/weather/selectors'
import moment from 'moment'

let cx = classNames.bind(styles)

type ForecastDay = 'today' | 'tomorrow'

const ForecastShort: FC = () => {
  const [forecastDay, setForecastDay] = useState<ForecastDay>('today')

  const changeForecastDay = (day: ForecastDay) => {
    if (day !== forecastDay) setForecastDay(day)
  }

  const location = useAppSelector(selectCurrentLocation)
  const units = useAppSelector(selectUnits)

  const [fetchForecastWeather, { data, isSuccess }] =
    useLazyGetForecastWeatherQuery()

  useEffect(() => {
    if (location) {
      fetchForecastWeather({ lat: location.lat, lon: location.lon, units })
    }
  }, [location, units])

  const dt = moment(new Date(data?.list[0].dt! * 1000)).dayOfYear()

  return (
    <div className={styles.root}>
      <span>{dt}</span>
      <div className={styles.nav}>
        <div className={styles.left}>
          <span
            className={cx('item', { active: forecastDay === 'today' })}
            onClick={() => changeForecastDay('today')}
          >
            Today
          </span>
          <span
            className={cx('item', { active: forecastDay === 'tomorrow' })}
            onClick={() => changeForecastDay('tomorrow')}
          >
            Tomorrow
          </span>
        </div>
        <div className={styles.right}>
          <span className={styles.item}>Next 5 Days</span>
          <div className={styles.icon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className={styles.main}>
        {[...Array(20)].map((_, idx) => (
          <div className={styles.item} key={idx}>
            <ForecastSmallCard />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ForecastShort
