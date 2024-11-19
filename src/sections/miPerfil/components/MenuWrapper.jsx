import { FormularioDatosUsuario } from "./FormularioDatosUsuario";
import { useState } from "react";
import { BarraLateral } from "./BarraLateral";
import { obtenerMisExperiencias } from '/src/global/api/seccionBusca/experiencia'
import { ExperienciaCard } from "./usuarioBusca/experiencia";
import { NuevaExperienciaCard } from './usuarioBusca/experiencia';

import '../styles/menuWrapper.css';
import { EntidadGrid } from "./usuarioBusca";

export const MenuWrapper = () => {

    const [componenteActivo, setComponenteActivo] = useState(<FormularioDatosUsuario />);

    return (
        <main className="menu-container">
            <BarraLateral cambiarComponenteActivo={setComponenteActivo} />
            {componenteActivo}
        </main>
    )
}
