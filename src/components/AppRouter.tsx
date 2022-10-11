import React, { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import { EmptyLayout } from '../layouts/EmptyLayout'
import { MainLayout } from '../layouts/MainLayout'
import { Welcome } from '../pages/Welcome'
import { Home } from '../pages/Home'
import { Details } from '../pages/Details'
import NotFound from '../pages/NotFound'

const AppRouter: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<EmptyLayout />}>
        <Route index element={<Welcome />} />
      </Route>
      <Route path=":location" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="details" element={<Details />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default AppRouter
