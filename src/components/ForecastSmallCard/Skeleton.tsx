import React from 'react'
import styles from './ForecastSmallCard.module.sass'

const ForecastSmallCardSkeleton = () => {
  return (
    <div className={styles.skeleton}>
      <div className={styles.root}></div>
    </div>
  )
}

export default ForecastSmallCardSkeleton
