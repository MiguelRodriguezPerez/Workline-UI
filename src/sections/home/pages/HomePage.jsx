import { WkFooter } from '../../../ui/components/WkFooter'
import { WkHeaderWrapper } from '../../../ui/components/WkHeaderWrapper.jsx'
import { HomeActionCallContainer } from '../components/HomeActionCallContainer'
import { HomeBanner } from '../components/HomeBanner'


export const HomePage = () => {

  return (
    <>
      <WkHeaderWrapper/>
      <HomeBanner/>
      <HomeActionCallContainer/>
      <WkFooter/>
    </>
  )
}

