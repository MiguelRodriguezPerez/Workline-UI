import { useEffect, useState } from "react";
import { quitarBorde, ponerBorde } from "../helpers/funcionesBorder";

export const useSwitchHideBottomBorder = ( isHidden, idElemento ) =>{

    const [isBorderHidden, setIsBorderHidden] = useState( isHidden );

    useEffect(() => {
        isBorderHidden ? quitarBorde(idElemento)  : ponerBorde(idElemento);
    }, [isBorderHidden]);

    const turnOnHideBorder = () => {
        setIsBorderHidden(true);
    }

    const turnOffHideBorder = () => {
        setIsBorderHidden(false);
    }

    return {
        isBorderHidden : isBorderHidden,
        turnOnHideBorder,
        turnOffHideBorder
    }
}