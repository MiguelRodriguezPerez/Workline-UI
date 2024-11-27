import { useState } from "react";
import { FormularioDatosUsuario } from "./FormularioDatosUsuario";

import '../styles/menuWrapper.css';
import { BarraLateralWrapper } from "./BarraLateralWrapper";

export const MenuWrapper = () => {

    const [componenteActivo, setComponenteActivo] = useState(<FormularioDatosUsuario />);

    return (
        <main className="menu-container">
            <BarraLateralWrapper setComponenteActivo={setComponenteActivo}/>
            {componenteActivo}
        </main>
    )
}
