import { useState } from "react";
import { MiPerfilSideNav } from "./MiPerfilSideNav";
import { useMenuDesplegable } from "../../../../global/hooks";

import '../../styles/general/barraLateralPhone.css';



export const BarraLateralPhone = () => {

    const { openMenu, closeMenu } = useMenuDesplegable('menu-perfil-desplegable');

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
