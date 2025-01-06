import { useSwitchHideBottomBorder, useSwitchHideLabel, useSwitchReadOnly } from "../../../global/hooks";

/*Para poder activar y desactivar la edición de la carta solo necesitas el id de la entidad*/
export const useCardEditOptions = ( id ) => {

    const { turnOnHideLabel, turnOffHideLabel } = useSwitchHideLabel(true, id);
    const { isReadOnly, turnOffReadOnly, turnOnReadOnly } = useSwitchReadOnly(true, id);
    const { turnOnHideBorder, turnOffHideBorder} = useSwitchHideBottomBorder(true, id);

    const activarEdicionCard = () => {
        turnOffHideLabel();
        turnOffReadOnly();
        turnOffHideBorder();
    }
    
    /*Necesitas que te llegue el callback reset de react hook form para resetear el 
    formulario al cancelar la edición*/
    const desactivarEdicionCard = ( resetForm = () => {}) => {
        turnOnReadOnly();
        turnOnHideLabel();
        turnOnHideBorder();
        resetForm();
    }

    return {
        isReadOnly : isReadOnly,
        activarEdicionCard,
        desactivarEdicionCard,
    }
}