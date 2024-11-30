import { useState } from "react";
import { MiPerfilSideNav } from "./MiPerfilSideNav";

import '../../styles/general/barraLateralPhone.css';


export const BarraLateralPhone = () => {

    const [isOpen, setOpen] = useState(false);
    const openMenu = () => {
        setOpen(true);
        document.getElementById('menu-perfil-desplegable').style.width = '100%'
    }
    const closeMenu = () => {
        setOpen(false);
        document.getElementById('menu-perfil-desplegable').style.width = '0%'
    }

    return (
        <>
            <img src="/images/miPerfil/seccionBusca/menu.png" alt="menu.png" id="abrir-menu" onClick={openMenu} />
            <aside id="menu-perfil-desplegable">
                <img src="/images/ui/cerrar.png" alt="close" onClick={closeMenu} />
                <MiPerfilSideNav/>
            </aside>
        </>
    )
}
