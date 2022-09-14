import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'
import styles from './MainLayout.module.sass'

const MainLayout: FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <Outlet />
      </div>
    </div>
  )
}

export default MainLayout
