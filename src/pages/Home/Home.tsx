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
        <CurrentSecondaryCard />
      </div>
      <div>
        <CurrentSecondaryCard />
      </div>
      <div>
        <CurrentSecondaryCard />
      </div>
      <div className={styles.forecastShort}>
        <ForecastShort />
      </div>
    </div>
  )
}

export default Home
