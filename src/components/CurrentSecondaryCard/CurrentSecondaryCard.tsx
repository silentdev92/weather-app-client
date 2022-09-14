import React, { FC } from 'react'
import { Card } from '../ui/Card'
import { Icon } from '../ui/Icon'
import styles from './CurrentSecondaryCard.module.sass'

interface CurrentSecondaryCardProps {
  icon: 'umbrella' | 'wind' | 'humidity'
  title: string
  value: string
}

const CurrentSecondaryCard: FC<CurrentSecondaryCardProps> = ({
  icon,
  title,
  value,
}) => {
  return (
    <Card>
      <div className={styles.root}>
        <div className={styles.left}>
          <div className={styles.icon}>
            <Icon img={icon} />
          </div>
          <span>{title}</span>
        </div>
        <div>
          <span>{value}</span>
        </div>
      </div>
    </Card>
  )
}

export default CurrentSecondaryCard
