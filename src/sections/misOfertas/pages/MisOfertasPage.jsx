import { WkHeaderWrapper } from '../../../ui/components/WkHeaderWrapper'
import { WkFooter } from '../../../ui/components/WkFooter'
import { MisOfertasHeading } from '../components/misOfertas/menuPrincipal/MisOfertasHeading'

import '../styles/misOfertasPage.css'
import { MisOfertasGrid } from '../components/misOfertas/menuPrincipal/MisOfertasGrid'
import { MisOfertasProvider } from '../context/misOfertasProvider'
import { MisOfertasPagination } from '../components/misOfertas/menuPrincipal/MisOfertasPagination'
import { NuevaOfertaButton } from '../components/misOfertas/menuPrincipal/NuevaOfertaButton'

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
