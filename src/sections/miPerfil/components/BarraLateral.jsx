import { useContext } from 'react';
import { AuthContext } from '../../../global/context/AuthContext';
import { FormularioDatosUsuario } from './FormularioDatosUsuario';
import { ConocimientoCard } from './usuarioBusca/conocimiento';
import { EntidadGrid } from './usuarioBusca/EntidadGrid';
import { ExperienciaCard, NuevaExperienciaCard } from './usuarioBusca/experiencia';
import { obtenerMisConocimientos } from '/src/global/api/seccionBusca/conocimiento';
import { obtenerMisExperiencias } from '/src/global/api/seccionBusca/experiencia';
import { NuevoConocimientoCard } from './usuarioBusca/conocimiento/NuevoConocimientoCard';
import { MisOfertasGrid } from './usuarioBusca/ofertas/MisOfertasGrid';


import '../styles/barraLateral.css';

export const BarraLateral = ({ cambiarComponenteActivo }) => {

    const { user } = useContext(AuthContext);

    return (
        <aside className="barra-lateral">
            <ul>
                <li onClick={() => cambiarComponenteActivo(<FormularioDatosUsuario />)}>Mis Datos</li>
                {
                    user?.rol === 'BUSCA' &&
                    <>
                        <li onClick={() => cambiarComponenteActivo(
                            <EntidadGrid key={'conocimientos'} peticion={obtenerMisConocimientos} titulo={'Conocimientos'}
                                Componente={ConocimientoCard} NuevaEntidadComponente={NuevoConocimientoCard} />)}
                        >Mis conocimientos</li>
                        <li onClick={() => cambiarComponenteActivo(
                            <EntidadGrid key={'experiencias'} peticion={obtenerMisExperiencias} titulo={'Conocimientos'}
                                Componente={ExperienciaCard} NuevaEntidadComponente={NuevaExperienciaCard} />)}
                        >Mis experiencias</li>
                        <li onClick={() => cambiarComponenteActivo(<MisOfertasGrid/>)}
                        >Mis ofertas</li>
                    </>
                }
            </ul>
        </aside>
    )
}
