import React from 'react'
import { Route, Routes } from 'react-router'
import { JobPage } from '../pages/JobPage'
import { JobOffer } from '../pages/JobOffer'
import { Page404 } from '../../../errors/pages'

export const JobRouter = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={ <JobPage/> }/>
            <Route path='/oferta/:id' element={ <JobOffer/> }/>
            <Route path="/*" element={ <Page404/> }/>
        </Routes>
    </>
  )
}
