import React from 'react'
import { Card } from '../ui/Card'
import styles from './ForecastDetailCard.module.sass'

const ForecastDetailCardSkeleton = () => {
  return (
    <div className={styles.skeleton}>
      <Card>
        <div className={styles.root}></div>
      </Card>
    </div>
  )
}

export default ForecastDetailCardSkeleton
