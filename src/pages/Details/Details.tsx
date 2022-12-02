import React, { FC, useEffect, useMemo } from 'react'
import { CSSTransition } from 'react-transition-group'
import { ForecastDetailCard } from '../../components/ForecastDetailCard'
import { useAppSelector } from '../../hooks/redux'
import { usePageNavigation } from '../../hooks/usePageNavigation'
import { selectCurrentLocation } from '../../store/location/selectors'
import { useLazyGetForecastWeatherQuery } from '../../store/weather/api'
import { selectUnits } from '../../store/weather/selectors'
import styles from './Details.module.sass'

const Details: FC = () => {
  const location = useAppSelector(selectCurrentLocation)
  const units = useAppSelector(selectUnits)

  const [
    fetchForecastWeather,
    { data, isSuccess, isLoading, isFetching, isError },
  ] = useLazyGetForecastWeatherQuery()

  useEffect(() => {
    if (location) {
      fetchForecastWeather({ lat: location.lat, lon: location.lon, units })
    }
  }, [location, units])

  const { navigateToHomePage } = usePageNavigation()

  const show = useMemo(
    () => isSuccess && !isLoading && !isFetching && !isError,
    [isSuccess, isLoading, isFetching, isError]
  )

  return (
    <div className={styles.root}>
      <div className={styles.nav}>
        <div className={styles.icon} onClick={() => navigateToHomePage()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </div>
        <div className={styles.title}>Next 5 Days</div>
      </div>
      <div className={styles.main}>
        {data?.list.map((item) => (
          <div key={item.dt}>
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
              <ForecastDetailCard weather={item} />
            </CSSTransition>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Details
