import React, { FC } from 'react'
import { CSSTransition } from 'react-transition-group'
import { getFormattedDate } from '../../helpers/dateTime'
import { getWeatherIconUrl } from '../../helpers/getWeatherIconUrl'
import { getTempUnits } from '../../helpers/units'
import { useAppSelector } from '../../hooks/redux'
import { LocationData } from '../../store/location/types'
import { selectUnits } from '../../store/weather/selectors'
import { CurrentWeatherData } from '../../store/weather/types'
import { Card } from '../ui/Card'
import styles from './CurrentPrimaryCard.module.sass'

interface CurrentPrimaryCardProps {
  location: LocationData
  weather: CurrentWeatherData
  show: boolean
}

const CurrentPrimaryCard: FC<CurrentPrimaryCardProps> = ({
  location,
  weather,
  show,
}) => {
  const units = useAppSelector(selectUnits)

  return (
    <Card>
      <div className={styles.root}>
        {weather && (
          <CSSTransition
            addEndListener={(node: HTMLElement, done: () => void) => {
              node.addEventListener('transitionend', done, false)
            }}
            in={show}
            timeout={300}
            classNames="fade"
            mountOnEnter
            unmountOnExit
          >
            <>
              <div className={styles.left}>
                <span className={styles.location}>
                  {location.name},
                  <br />
                  {location.country.name}
                </span>
                <span className={styles.date}>
                  {getFormattedDate(weather.dt)}
                </span>
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
                      <span className={styles.unit}>{getTempUnits(units)}</span>
                    </span>
                    <span className={styles.desc}>
                      {weather.weather[0].main}
                    </span>
                  </div>
                </div>
              </div>
            </>
          </CSSTransition>
        )}
      </div>
    </Card>
  )
}

export default CurrentPrimaryCard
