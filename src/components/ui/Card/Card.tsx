import React, { FC, ReactNode } from 'react'
import classNames from 'classnames/bind'
import styles from './Card.module.sass'

let cx = classNames.bind(styles)

interface CardProps {
  children: ReactNode
  active?: boolean
}

const Card: FC<CardProps> = ({ children, active = false }) => {
  let className = cx('root', {
    active,
  })

  return <div className={className}>{children}</div>
}

export default Card
