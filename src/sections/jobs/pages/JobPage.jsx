
import { WkFooter } from '../../../ui/components/WkFooter'
import { WkHeader } from '../../../ui/components/WkHeader'
import { JobFeed } from '../components/JobFeed'
import { JobFormWrapper } from '../components/JobFormWrapper'
import { JobHeading } from '../components/JobHeading'
import { JobPagination } from '../components/JobPagination'
import { JobProvider } from '../context/JobProvider'
import '../styles/jobPage.css'

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
