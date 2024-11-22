import { useEffect, useState } from "react";
import { ponerBorde, quitarBorde } from "../helpers/funcionesBorder";
import { activarReadOnly, desactivarReadOnly } from "../helpers/funcionesReadOnly";

export const useSwitchReadOnly = ( isReadOnlyRequired, idElemento ) =>{

    const [isReadOnly, setIsReadOnly] = useState( isReadOnlyRequired );

    useEffect(() => {
        if(isReadOnly) {
            activarReadOnly(idElemento);
        }
        else {
            desactivarReadOnly(idElemento);
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