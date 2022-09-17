import React, { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import { EmptyLayout } from '../layouts/EmptyLayout'
import { MainLayout } from '../layouts/MainLayout'
import { Welcome } from '../pages/Welcome'
import { Home } from '../pages/Home'
import { Details } from '../pages/Details'

const AppRouter: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<EmptyLayout />}>
        <Route index element={<Welcome />} />
      </Route>
      <Route path=":city" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="details" element={<Details />} />
      </Route>
    </Routes>
  )
}

export default AppRouter
