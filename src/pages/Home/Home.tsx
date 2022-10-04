import React, { FC } from 'react'
import { CurrentPrimaryCard } from '../../components/CurrentPrimaryCard'
import { CurrentSecondaryCard } from '../../components/CurrentSecondaryCard'
import { ForecastShort } from '../../components/ForecastShort'
import { OptionsCard } from '../../components/OptionsCard'
import styles from './Home.module.sass'

const Home: FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.optionsCard}>
        <OptionsCard />
      </div>
      <div className={styles.currentPrimaryCard}>
        <CurrentPrimaryCard />
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
