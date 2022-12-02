import React, { FC } from 'react'
import { CSSTransition } from 'react-transition-group'
import { Card } from '../ui/Card'
import { Icon } from '../ui/Icon'
import styles from './CurrentSecondaryCard.module.sass'

interface CurrentSecondaryCardProps {
  icon: 'umbrella' | 'wind' | 'humidity'
  title: string
  value: string
  show: boolean
}

const CurrentSecondaryCard: FC<CurrentSecondaryCardProps> = ({
  icon,
  title,
  value,
  show,
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
            <span>{value}</span>
          </CSSTransition>
        </div>
      </div>
    </Card>
  )
}

export default CurrentSecondaryCard
