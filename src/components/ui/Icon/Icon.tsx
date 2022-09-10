import React, { FC } from 'react'
import styles from './Icon.module.sass'

interface IconProps {
  imgUrl: string
}

const Icon: FC<IconProps> = ({ imgUrl }) => {
  return (
    <div className={styles.root}>
      <img className={styles.icon} src={imgUrl} />
    </div>
  )
}

export default Icon
