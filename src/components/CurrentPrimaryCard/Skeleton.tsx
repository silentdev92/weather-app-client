import React from 'react'
import styles from './CurrentPrimaryCard.module.sass'
import { Card } from '../ui/Card'

const CurrentPrimaryCardSkeleton = () => {
  return (
    <div className={styles.skeleton}>
      <Card>
        <div className={styles.root}></div>
      </Card>
    </div>
  )
}

export default CurrentPrimaryCardSkeleton
