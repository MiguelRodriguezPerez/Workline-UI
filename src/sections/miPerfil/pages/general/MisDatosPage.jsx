import { BarraLateralWrapper, CabeceraMiPerfil, FormularioDatosUsuario } from '../../components/general'
import { WkHeaderWrapper, WkFooter } from '/src/ui/components'

import '../../styles/general/miPerfilPage.css'

export const MisDatosPage = () => {
  return (
    <>
       <WkHeaderWrapper/>
        <main className='mi-perfil-page-wrapper'>
          <BarraLateralWrapper/>
          <CabeceraMiPerfil/>
          <FormularioDatosUsuario/>
        </main>
       <WkFooter/>
    </>
  )
}
