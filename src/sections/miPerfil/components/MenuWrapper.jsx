import { FormularioDatosUsuario } from "./FormularioDatosUsuario";
import { useState } from "react";
import { BarraLateral } from "./BarraLateral";

import '../styles/menuWrapper.css';

export const MenuWrapper = () => {

    const [ componenteActivo, setComponenteActivo ] = useState(<FormularioDatosUsuario/>);

    return (
        <main className="menu-container">
            <BarraLateral cambiarComponenteActivo={ setComponenteActivo }/>
            { componenteActivo }
        </main>
    )
}
