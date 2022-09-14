import React, { FC } from 'react'
import { CurrentMainCard } from '../../components/CurrentMainCard'
import { CurrentSecondaryCard } from '../../components/CurrentSecondaryCard'
import { ForecastShort } from '../../components/ForecastShort'
import styles from './Home.module.sass'

const Home: FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.currentMainCard}>
        <CurrentMainCard />
      </div>
      <div>
        <CurrentSecondaryCard icon="umbrella" title="RainFall" value="3cm" />
      </div>
      <div>
        <CurrentSecondaryCard icon="wind" title="Wind" value="19km/h" />
      </div>
      <div>
        <CurrentSecondaryCard icon="humidity" title="Humidity" value="64%" />
      </div>
      <div className={styles.forecastShort}>
        <ForecastShort />
      </div>
    </div>
  )
}

export default Home
