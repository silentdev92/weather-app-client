import React, { FC } from 'react'
import { Helmet } from 'react-helmet-async'
import { Outlet } from 'react-router-dom'
import styles from './Emptylayout.module.sass'

const EmptyLayout: FC = () => {
  return (
    <>
      <Helmet>
        <title>Weather App</title>
      </Helmet>
      <div className={styles.root}>
        <Outlet />
      </div>
    </>
  )
}

export default EmptyLayout
