import { useNavigate } from "react-router";

import '../../styles/formulariosOferta/ofertaEncabezadoLinks.css'
import '/src/global/styles/formularios.css'

/*reset hace referencia a la función reset 
de react-hook-forms, que permite resetear el formulario*/
export const NuevaOfertaLinks = ({ reset }) => {

    const navigate = useNavigate();
    const redirectBack = (event) => {
        event.preventDefault();
        navigate(-1);
    }

    return (
        <section className="oferta-encabezado-links">
            <a onClick={redirectBack} className="heading-link">Volver atrás</a>
            <p onClick={() => { reset() }}>Borrar valores</p>
        </section>
    );
}
