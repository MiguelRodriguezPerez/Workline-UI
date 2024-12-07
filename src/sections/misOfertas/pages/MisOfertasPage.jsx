import { WkHeaderWrapper, WkFooter } from '../../../ui/components'
import { MisOfertasProvider } from '../context/MisOfertasProvider'
import { MisOfertasHeading, NuevaOfertaButton, 
MisOfertasGrid,MisOfertasPagination } from '../components/misOfertas/menuPrincipal'

import '../styles/misOfertasPage.css'


export const MisOfertasPage = () => {
  return (
    <>
      <WkHeaderWrapper />
      <main className='mis-ofertas-wrapper'>
        <MisOfertasProvider>
          <MisOfertasHeading />
          <NuevaOfertaButton />
          <MisOfertasGrid />
          <MisOfertasPagination />
        </MisOfertasProvider>
      </main>
      <WkFooter />
    </>
  )
}
