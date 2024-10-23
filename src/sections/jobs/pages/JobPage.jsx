import React from 'react'
import { WkHeader } from '../../../ui/components/WkHeader'
import { WkFooter } from '../../../ui/components/WkFooter'
import '../styles/jobPage.css'
import { JobSearchForm } from '../components/JobSearchForm'
import { useOffers } from '../hooks/useOffers'
import { JobFeed } from '../components/JobFeed'
import { JobProvider } from '../context/JobProvider'
import { JobHeading } from '../components/JobHeading'

export const JobPage = () => {

  return (
    <>
        <WkHeader/>
          <JobProvider>
            <section className='job-page'>
                <div></div>
                <JobHeading/>
                <JobSearchForm/>
                <JobFeed/>
            </section>
          </JobProvider>
        <WkFooter/>
    </>
  )
}
