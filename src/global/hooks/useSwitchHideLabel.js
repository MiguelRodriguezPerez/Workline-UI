import { useEffect, useState } from "react";
import { mostrarLabel, ocultarLabel } from "../helpers/funcionesMostrarLabel";

export const useSwitchHideLabel = ( isHidden, idElemento ) =>{

    const [isLabelHidden, setIsLabelVisible] = useState( isHidden );

    useEffect(() => {
        isLabelHidden ? ocultarLabel(idElemento)  : mostrarLabel(idElemento);
    }, [isLabelHidden]);

    const turnOnHideLabel = () => {
        setIsLabelVisible(true);
    }

    const turnOffHideLabel = () => {
        setIsLabelVisible(false);
    }

    return {
        isLabelHidden: isLabelHidden,
        turnOnHideLabel,
        turnOffHideLabel
    }
}