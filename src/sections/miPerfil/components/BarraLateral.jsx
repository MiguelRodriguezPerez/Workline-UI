import { useContext } from 'react';
import { AuthContext } from '../../../global/context/AuthContext';
import { FormularioDatosUsuario } from './FormularioDatosUsuario';
import { ExperienciaCard } from './usuarioBusca/experiencia';
import { ConocimientoCard } from './usuarioBusca/conocimiento';
import { EntidadGrid } from './usuarioBusca/EntidadGrid';
import { obtenerMisConocimientos } from '/src/global/api/seccionBusca/conocimiento';
import { obtenerMisExperiencias } from '/src/global/api/seccionBusca/experiencia';
import { NuevaExperienciaCard } from './usuarioBusca/experiencia';

import '../styles/barraLateral.css';
import { NuevoConocimientoCard } from './usuarioBusca/conocimiento/NuevoConocimientoCard';

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
                            <EntidadGrid clave='conocimientos' peticion={obtenerMisConocimientos}
                                Componente={ConocimientoCard} NuevaEntidadComponente={NuevoConocimientoCard} />)}
                        >Mis conocimientos</li>
                        <li onClick={() => cambiarComponenteActivo(
                            <EntidadGrid clave='experiencias' peticion={obtenerMisExperiencias}
                                Componente={ExperienciaCard} NuevaEntidadComponente={NuevaExperienciaCard} />)}
                        >Mis experiencias</li>
                        <li>Mis ofertas</li>
                    </>
                }
            </ul>
        </aside>
    )
}
