import { WkFooter } from "../../../ui/components/WkFooter";
import { WkHeaderWrapper } from "../../../ui/components/WkHeaderWrapper";
import { EditarOfertaForm } from "../components/nuevaOferta/EditarOfertaForm";

export const EditarOfertaPage = () => {

    const id = parseInt(location.pathname.substring(25));

    return (
        <>
            <WkHeaderWrapper/>
            <EditarOfertaForm id={id} isEditable={true}/>
            <WkFooter/>
        </>
    )
}
