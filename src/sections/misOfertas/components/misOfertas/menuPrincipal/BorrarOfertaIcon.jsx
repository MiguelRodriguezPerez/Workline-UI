import { useContext } from "react";
import { borrarOferta } from "../../../../../global/api/seccionContrata";
import { MisOfertasContext } from "../../../context";


export const BorrarOfertaIcon = ( { id }) => {

    const { refreshData } = useContext(MisOfertasContext);

    const deleteOferta = async() => {
        const resultado = await borrarOferta(id);
        console.log(resultado.status)
        if(resultado.status === 204) refreshData();
    }

    return (
        <img src="/images/misOfertas/borrar.png" alt="borrar.png" onClick={deleteOferta}/>
    )
}
