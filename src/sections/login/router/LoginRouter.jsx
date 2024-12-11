import React from 'react'
import { Route, Routes } from 'react-router'
import { LoginPage } from '../page/LoginPage'
import { Page404 } from '../../../errors/pages'

export const LoginRouter = () => {
  return (
    <Routes>
        <Route path='/' element={ <LoginPage/> }/>
        <Route path="/*" element={ <Page404/> }/>
    </Routes>
  )
}
