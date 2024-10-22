import React from 'react'
import { WkHeader } from '../../../ui/components/WkHeader'
import { WkFooter } from '../../../ui/components/WkFooter'
import '../styles/jobPage.css'
import { JobSearchForm } from '../components/JobSearchForm'
import { useOffers } from '../hooks/useOffers'
import { JobFeed } from '../components/JobFeed'

export const JobPage = () => {

  return (
    <>
        <WkHeader/>
        <section className='job-page'>
            <div></div>
            <h3>24 ofertas disponibles</h3>
            <JobSearchForm/>
            <JobFeed/>
        </section>
        <WkFooter/>
    </>
  )
}
