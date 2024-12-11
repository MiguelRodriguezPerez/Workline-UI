import { useNavigate } from "react-router";
import { useSwitchReadOnly } from "../../../../global/hooks";

import '../../styles/formulariosOferta/ofertaEncabezadoLinks.css'
import '/src/global/styles/formularios.css'

export const EditarOfertaLinks = ({ id, reset }) => {

    const { isReadOnly, turnOnReadOnly, turnOffReadOnly } = useSwitchReadOnly(true, id);

    const cancelEvent = () => {
        reset();
        turnOnReadOnly();
    }
    
    const navigate = useNavigate();
    const redirectBack = (event) => {
        event.preventDefault();
        navigate(-1);
    }

  return (
    <section className="oferta-encabezado-links">
        <a onClick={redirectBack} className="heading-link">Volver atrás</a>
        {
            isReadOnly ?
                <p onClick={turnOffReadOnly}> Editar oferta </p>
                :
                <p onClick={cancelEvent}> Cancelar </p>
        }
    </section>
  );

}
