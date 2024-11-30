import { BarraLateralWrapper, CabeceraMiPerfil } from '../../components/general'
import { obtenerMisExperiencias } from '../../../../global/api/seccionBusca/experiencia'
import { ExperienciaCard, NuevaExperienciaCard } from '../../components/usuarioBusca/experiencia'
import { WkHeaderWrapper, WkFooter } from '/src/ui/components'
import { EntidadGrid } from '../../components/usuarioBusca/EntidadGrid'


import '../../styles/general/miPerfilPage.css'


export const MisExperienciasPage = () => {
  return (
    <>
        <WkHeaderWrapper/>
        <main className='mi-perfil-page-wrapper'>
        <BarraLateralWrapper/>
          <CabeceraMiPerfil/>
          <EntidadGrid peticion={obtenerMisExperiencias} NuevaEntidadComponente={NuevaExperienciaCard}
            titulo={'Experiencias'} key={'grid-experiencias'} Componente={ExperienciaCard}/>
        </main>
        <WkFooter/>
    </>
  )
}
