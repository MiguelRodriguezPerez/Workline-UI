import { useContext, useState } from "react";

import '../styles/barraLateralPhone.css'
import { AuthContext } from '../../../global/context/AuthContext';
import { FormularioDatosUsuario } from './FormularioDatosUsuario';
import { ConocimientoCard } from './usuarioBusca/conocimiento';
import { EntidadGrid } from './usuarioBusca/EntidadGrid';
import { ExperienciaCard, NuevaExperienciaCard } from './usuarioBusca/experiencia';
import { obtenerMisConocimientos } from '/src/global/api/seccionBusca/conocimiento';
import { obtenerMisExperiencias } from '/src/global/api/seccionBusca/experiencia';
import { NuevoConocimientoCard } from './usuarioBusca/conocimiento/NuevoConocimientoCard';
import { MisOfertasGrid } from './usuarioBusca/ofertas/MisOfertasGrid';


export const BarraLateralPhone = ({ cambiarComponenteActivo }) => {

    const [isOpen,setOpen] = useState(false);
    const openMenu = () => {
        setOpen(true);
        document.getElementById('menu-perfil-desplegable').style.width = '100%'
    }
    const closeMenu = () => {
        setOpen(false);
        document.getElementById('menu-perfil-desplegable').style.width = '0%'   
    }

    const { user } = useContext(AuthContext);

  return (
    <>
        <img src="/images/miPerfil/seccionBusca/menu.png" alt="menu.png" id="abrir-menu" onClick={ openMenu }/>
        <aside id="menu-perfil-desplegable">
            <img src="/images/ui/cerrar.png" alt="close" onClick={ closeMenu } />
            <ul>
                <li onClick={() => {
                    cambiarComponenteActivo(<FormularioDatosUsuario />)
                    closeMenu()
                    }}>Mis Datos</li>
                {
                    user?.rol === 'BUSCA' &&
                    <>
                        <li onClick={() => {
                            cambiarComponenteActivo(
                            <EntidadGrid key={'conocimientos'} peticion={obtenerMisConocimientos} titulo={'Conocimientos'}
                                Componente={ConocimientoCard} NuevaEntidadComponente={NuevoConocimientoCard} />)
                                closeMenu() }
                            }
                        >Mis conocimientos</li>
                        <li onClick={() => {cambiarComponenteActivo(
                            <EntidadGrid key={'experiencias'} peticion={obtenerMisExperiencias} titulo={'Experiencias'}
                                Componente={ExperienciaCard} NuevaEntidadComponente={NuevaExperienciaCard} />)
                                closeMenu()}
                                }
                        >Mis experiencias</li>
                        <li onClick={() => {
                            cambiarComponenteActivo(<MisOfertasGrid/>); 
                            closeMenu();
                            }}
                        >Mis ofertas</li>
                    </>
                }
            </ul>
        </aside>
    </>
  )
}
