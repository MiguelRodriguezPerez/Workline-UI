import { NuevoConocimientoCard } from '../../miPerfil/components/usuarioBusca/conocimiento/NuevoConocimientoCard';
import { EntidadGrid } from '../../miPerfil/components/usuarioBusca/EntidadGrid';
import { NuevaExperienciaCard } from '../../miPerfil/components/usuarioBusca/experiencia/NuevaExperienciaCard';
import { obtenerMisConocimientos } from '/src/global/api/seccionBusca/conocimiento'
import { obtenerMisExperiencias } from '/src/global/api/seccionBusca/experiencia'
import { ConocimientoCard } from '/src/sections/miPerfil/components/usuarioBusca/conocimiento'
import { ExperienciaCard } from '/src/sections/miPerfil/components/usuarioBusca/experiencia'
import { GridNuevoUsuarioBuscaEntity } from './GridNuevoUsuarioBuscaEntity';
import { useNavigate } from 'react-router';

import '../styles/segundoFormularioNuevoUsuario.css'
import '/src/global/styles/elementos.css'
import '/src/global/styles/formularios.css'


export const SegundoFormularioNuevoUsuario = () => {

  const navigate = useNavigate();

  return (
    <main className='new-busca-forms-container'>
        <p className='heading-link' onClick={() => { navigate('/') } }>Terminar cuenta</p>
        <section className='new-busca-columns'>
            <div>
              <GridNuevoUsuarioBuscaEntity peticion={obtenerMisConocimientos} 
                NuevaEntidadCard={NuevoConocimientoCard}
                EntidadCard={ConocimientoCard} titulo={'Conocimientos'}/>
            </div>
            <div>
              <GridNuevoUsuarioBuscaEntity peticion={obtenerMisExperiencias} 
                NuevaEntidadCard={NuevaExperienciaCard}
                EntidadCard={ExperienciaCard} titulo={'Experiencias'}/>
            </div>
        </section>
    </main>
  );
  
}
