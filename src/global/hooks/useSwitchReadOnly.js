import { useEffect, useState } from "react";
import { activarReadOnly, desactivarReadOnly } from "../helpers/funcionesReadOnly";
import { mostrarLabel,  ocultarLabel } from "../helpers/funcionesMostrarLabel";
import { ponerBorde, quitarBorde } from "../helpers/funcionesClassForm";

export const useSwitchReadOnly = ( isReadOnlyRequired, idElemento ) =>{

    const [isReadOnly, setIsReadOnly] = useState( isReadOnlyRequired );

    useEffect(() => {
        // isReadOnly ? activarReadOnly() : desactivarReadOnly();
        if(isReadOnly) {
            activarReadOnly(idElemento);
            quitarBorde(idElemento);
            ocultarLabel(idElemento);
        }
        else {
            desactivarReadOnly(idElemento);
            ponerBorde(idElemento);
            mostrarLabel(idElemento);
        }
    }, [isReadOnly]);

    const turnOnReadOnly = () => {
        setIsReadOnly(true);
    }

    const turnOffReadOnly = () => {
        setIsReadOnly(false);
    }

    return {
        isReadOnly: isReadOnly,
        turnOnReadOnly,
        turnOffReadOnly
    }
}