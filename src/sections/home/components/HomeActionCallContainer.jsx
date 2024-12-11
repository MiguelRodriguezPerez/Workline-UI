import { EncontrarTrabajoActionCall, ContrataActionCall } from './'

import '../styles/homeActionCallContainer.css'

export const HomeActionCallContainer = () => {
  return (
    <section className='home-action-container'>  
      <EncontrarTrabajoActionCall/>
      <ContrataActionCall/>
    </section>
  )
}


