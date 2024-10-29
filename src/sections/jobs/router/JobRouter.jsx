import React from 'react'
import { Route, Routes } from 'react-router'
import { JobPage } from '../pages/JobPage'
import { JobOffer } from '../pages/JobOffer'

export const JobRouter = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={ <JobPage/> }/>
            <Route path='/oferta/:id' element={ <JobOffer/> }/>
        </Routes>
    </>
  )
}
