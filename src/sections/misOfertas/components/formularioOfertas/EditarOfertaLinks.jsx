import { useNavigate } from "react-router";

import '../../styles/formulariosOferta/ofertaEncabezadoLinks.css'
import '/src/global/styles/formularios.css'
import { useSwitchReadOnly } from "../../../../global/hooks";

export const EditarOfertaLinks = ({ id }) => {

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
