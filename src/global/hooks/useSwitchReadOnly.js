import { useEffect, useState } from "react";
import { activarReadOnly, desactivarReadOnly } from "../helpers/funcionesReadOnly";

export const useSwitchReadOnly = ( isReadOnlyRequired ) =>{

    const [isReadOnly, setIsReadOnly] = useState( isReadOnlyRequired );

    useEffect(() => {
        isReadOnly ? activarReadOnly() : desactivarReadOnly();
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