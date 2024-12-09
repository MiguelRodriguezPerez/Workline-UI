import { BarraLateralWrapper, CabeceraMiPerfil } from '../../components/general'
import { obtenerMisConocimientos } from '../../../../global/api/seccionBusca/conocimiento'
import { ConocimientoCard, NuevoConocimientoCard } from '../../components/usuarioBusca/conocimiento'
import { WkHeaderWrapper, WkFooter } from '/src/ui/components'
import { EntidadGrid } from '../../components/usuarioBusca/EntidadGrid'


import '../../styles/general/miPerfilPage.css'
import { NoRegisteredConocimientos } from '../../components/usuarioBusca/conocimiento/NoRegisteredConocimientos'


export const MisConocimientosPage = () => {
  return (
    <>
        <WkHeaderWrapper/>
        <main className='mi-perfil-page-wrapper'>
          <BarraLateralWrapper/>
          <CabeceraMiPerfil/>
          <EntidadGrid peticion={obtenerMisConocimientos} NuevaEntidadComponente={NuevoConocimientoCard}
            titulo={'Conocimientos'} key={'grid-conocimientos'} Componente={ConocimientoCard}
            NoResultsFound={NoRegisteredConocimientos}/>
        </main>
        <WkFooter/>
    </>
  )
}
