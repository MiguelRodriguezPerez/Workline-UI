import { useContext } from 'react';
import { AuthContext } from '../../../global/context/AuthContext';
import '../styles/barraLateral.css';
import { FormularioDatosUsuario } from './FormularioDatosUsuario';
import { ConocimientoCard, ExperienciaCard } from './usuarioBusca';
import { EntidadGrid } from './usuarioBusca/EntidadGrid';
import { obtenerMisConocimientos, obtenerMisExperiencias } from '/src/global/api/seccionBusca';
import { NuevaExperienciaCard } from './usuarioBusca/NuevaExperienciaCard';


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
                                Componente={ConocimientoCard} />)}
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
