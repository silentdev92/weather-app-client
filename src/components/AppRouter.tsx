import React, { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import { MainLayout } from '../layouts/MainLayout'
import { Details } from '../pages/Details'
import { Home } from '../pages/Home'

const AppRouter: FC = () => {
  return (
    <Routes>
      <Route path=":city" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="details" element={<Details />} />
      </Route>
    </Routes>
  )
}

export default AppRouter
