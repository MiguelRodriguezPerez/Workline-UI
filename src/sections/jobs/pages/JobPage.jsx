
import { WkFooter } from '../../../ui/components/WkFooter'
import { WkHeader } from '../../../ui/components/WkHeader'
import { JobFeed } from '../components/jobPage/JobFeed'
import { JobFormWrapper } from '../components/jobPage/JobFormWrapper'
import { JobHeading } from '../components/jobPage/JobHeading'
import { JobPagination } from '../components/jobPage/JobPagination'
import { JobProvider } from '../context/jobPage/JobProvider'
import '../styles/jobPage/jobPage.css'

export const JobPage = () => {

  return (
    <>
        <WkHeader/>
          <JobProvider>
            <section className='job-page'>
                <div></div>
                <JobHeading/>
                <JobFormWrapper/>
                <JobFeed/>
                <JobPagination/>
            </section>
          </JobProvider>
        <WkFooter/>
    </>
  )
}
