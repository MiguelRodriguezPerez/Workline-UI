import React from 'react'
import { WkHeader } from '../../ui/components/WkHeader'
import '../styles/jobPage.css'
import { JobSearchForm } from '../components/JobSearchForm'

export const JobPage = () => {
  return (
    <>
        <WkHeader/>
        <section className='jobsGrid'>
            <div></div>
            <div>
                <h3>24 ofertas disponibles</h3>
            </div>
            <div>
                <JobSearchForm/>
            </div>
            <div></div>
        </section>
    </>
  )
}
