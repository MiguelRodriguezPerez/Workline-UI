import { BarraLateralWrapper, CabeceraMiPerfil } from '../../components/general'
import { WkFooter, WkHeaderWrapper } from '/src/ui/components'
import { MisOfertasGrid } from '../../components/usuarioBusca/ofertas/MisOfertasGrid'

import '../../styles/general/miPerfilPage.css'


export const MisInscripcionesPage = () => {
  return (
    <>
        <WkHeaderWrapper/>
        <main className='mi-perfil-page-wrapper'>
        <BarraLateralWrapper/>
          <CabeceraMiPerfil/>
          <MisOfertasGrid/>
        </main>
        <WkFooter/>
    </>
  )
}
