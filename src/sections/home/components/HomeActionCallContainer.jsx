import { HomeActionCall } from './HomeActionCall'

import '../styles/homeActionCallContainer.css'

export const HomeActionCallContainer = () => {
  return (
    <section className='home-action-container'>
      <HomeActionCall url={'/ofertasDeTrabajo/?numPag=0'}/>
      <HomeActionCall url={'/misOfertas/0'}/>
    </section>
  )
}


