import { useEffect, useState } from 'react'
import {WkHeader} from '../../../ui/components/WkHeader'
import { HomeBanner } from '../components/HomeBanner'
import { HomeActionCallContainer } from '../components/HomeActionCallContainer'
import { WkFooter } from '../../../ui/components/WkFooter'


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

