import React, { FC } from 'react'
import { CurrentMain } from '../../components/CurrentMain'
import { CurrentSecondaryCard } from '../../components/CurrentSecondaryCard'
import { ForecastShort } from '../../components/ForecastShort'
import styles from './Home.module.sass'

const Home: FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.currentMain}>
        <CurrentMain />
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
