import { HomeActionCall } from './HomeActionCall'

import '../styles/homeActionCallContainer.css'

export const HomeActionCallContainer = () => {
  return (
    <section className='home-action-container'>
      <HomeActionCall url={'/ofertasDeTrabajo/0'}/>
      <HomeActionCall url={'/contrata'}/>
    </section>
  )
}


