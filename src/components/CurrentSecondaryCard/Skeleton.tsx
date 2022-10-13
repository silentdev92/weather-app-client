import React from 'react'
import styles from './CurrentSecondaryCard.module.sass'
import { Card } from '../ui/Card'

const CurrentSecondaryCardSkeleton = () => {
  return (
    <div className={styles.skeleton}>
      <Card>
        <div className={styles.root}></div>
      </Card>
    </div>
  )
}

export default CurrentSecondaryCardSkeleton
