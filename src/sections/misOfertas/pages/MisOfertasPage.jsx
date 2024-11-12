import { WkHeaderWrapper } from '../../../ui/components/WkHeaderWrapper'
import { WkFooter } from '../../../ui/components/WkFooter'
import { MisOfertasHeading } from '../components/misOfertas/MisOfertasHeading'

import '../styles/misOfertasPage.css'
import { MisOfertasGrid } from '../components/misOfertas/MisOfertasGrid'
import { MisOfertasProvider } from '../context/misOfertasProvider'
import { MisOfertasPagination } from '../components/misOfertas/MisOfertasPagination'
import { NuevaOfertaButton } from '../components/misOfertas/NuevaOfertaButton'

export const MisOfertasPage = () => {
  return (
    <>
        <WkHeaderWrapper/>
          <main className='mis-ofertas-wrapper'>
            <MisOfertasProvider>
              <MisOfertasHeading/>
              <NuevaOfertaButton/>
              <MisOfertasGrid/> 
              <MisOfertasPagination/>
            </MisOfertasProvider>
          </main>
        <WkFooter/>
    </>
  )
}
