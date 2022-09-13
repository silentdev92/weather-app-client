import React, { FC } from 'react'
import styles from './Icon.module.sass'

import umbrella from '../../../assets/img/secondary/umbrella-icon.svg'
import wind from '../../../assets/img/secondary/wind-icon.svg'
import humidity from '../../../assets/img/secondary/humidity-icon.svg'

interface IconProps {
  img: 'umbrella' | 'wind' | 'humidity'
}

const Icon: FC<IconProps> = ({ img }) => {
  const imgUrl = { umbrella, wind, humidity }
  return (
    <div className={styles.root}>
      <img className={styles.icon} src={imgUrl[img]} />
    </div>
  )
}

export default Icon
