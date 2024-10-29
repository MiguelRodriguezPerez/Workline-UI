
import { WkHeader } from '../../../ui/components/WkHeader'
import { WkFooter } from '../../../ui/components/WkFooter'
import '../styles/jobPage.css'
import { JobFormPc } from '../components/JobFormPc'
import { JobFeed } from '../components/JobFeed'
import { JobProvider } from '../context/JobProvider'
import { JobHeading } from '../components/JobHeading'
import { JobPagination } from '../components/JobPagination'
import { JobFormPhone } from '../components/JobFormPhone'
import { JobFormWrapper } from '../components/JobFormWrapper'

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
