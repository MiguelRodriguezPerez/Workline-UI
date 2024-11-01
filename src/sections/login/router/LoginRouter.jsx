import React from 'react'
import { Route, Routes } from 'react-router'
import { LoginPage } from '../page/LoginPage'

export const LoginRouter = () => {
  return (
    <Routes>
        <Route path='/' element={ <LoginPage/> }/>
    </Routes>
  )
}
