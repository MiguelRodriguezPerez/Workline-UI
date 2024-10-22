import { WkFooter } from '../../../ui/components/WkFooter'
import { WkHeader } from '../../../ui/components/WkHeader'
import { HomeActionCallContainer } from '../components/HomeActionCallContainer'
import { HomeBanner } from '../components/HomeBanner'


export const HomePage = () => {

  return (
    <>
      <WkHeader/>
      <HomeBanner/>
      <HomeActionCallContainer/>
      <WkFooter/>
    </>
  )
}

