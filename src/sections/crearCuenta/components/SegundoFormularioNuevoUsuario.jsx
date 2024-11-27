import { NuevoConocimientoCard } from '../../miPerfil/components/usuarioBusca/conocimiento/NuevoConocimientoCard';
import { EntidadGrid } from '../../miPerfil/components/usuarioBusca/EntidadGrid';
import { NuevaExperienciaCard } from '../../miPerfil/components/usuarioBusca/experiencia/NuevaExperienciaCard';
import { obtenerMisConocimientos } from '/src/global/api/seccionBusca/conocimiento'
import { obtenerMisExperiencias } from '/src/global/api/seccionBusca/experiencia'
import { ConocimientoCard } from '/src/sections/miPerfil/components/usuarioBusca/conocimiento'
import { ExperienciaCard } from '/src/sections/miPerfil/components/usuarioBusca/experiencia'
import { useNavigate } from 'react-router';

import '../styles/segundoFormularioNuevoUsuario.css'
import '/src/global/styles/elementos.css'
import '/src/global/styles/formularios.css'

export const SegundoFormularioNuevoUsuario = () => {

  const navigate = useNavigate();

  return (
    <main className='new-busca-forms-container'>
        <button className='green-button' onClick={() => { navigate('/') } }>Terminar cuenta</button>
        <section className='new-busca-columns'>
            <div>
              <NuevoConocimientoCard/>
              <EntidadGrid peticion={obtenerMisConocimientos} Componente={ConocimientoCard}
                NuevaEntidadComponente={null} titulo={'Conocimientos'}/>
            </div>
            <div>
              <NuevaExperienciaCard/>
              <EntidadGrid peticion={obtenerMisExperiencias} Componente={ExperienciaCard}
                NuevaEntidadComponente={null} titulo={'Experiencias'}/>
            </div>
        </section>
    </main>
  );
  
}
