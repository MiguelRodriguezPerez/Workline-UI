import { useContext } from 'react'
import { WkFooter } from '../../../ui/components/WkFooter'
import { WkHeaderWrapper } from '../../../ui/components/WkHeaderWrapper'
import { JobFeed } from '../components/jobPage/JobFeed'
import { JobFormWrapper } from '../components/jobPage/JobFormWrapper'
import { JobHeading } from '../components/jobPage/JobHeading'
import { JobPagination } from '../components/jobPage/JobPagination'
import { JobProvider } from '../context/jobPage/JobProvider'

import '../styles/jobPage/jobPage.css'

export const JobPage = () => {

  return (
    <>
        <WkHeaderWrapper/>
          <JobProvider>
              <section className='job-page'>
                  <div></div>
                  <JobHeading/>
                  <JobFormWrapper/>
                  <JobFeed/>
                  <div></div>
                  <JobPagination/>
              </section>
          </JobProvider>
        <WkFooter/>
    </>
  )
}
