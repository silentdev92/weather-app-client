import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'
import styles from './MainLayout.module.sass'

const MainLayout: FC = () => {
  return (
    <div>
      <div className={styles.container}>
        Navigation
        <Outlet />
      </div>
    </div>
  )
}

export default MainLayout
