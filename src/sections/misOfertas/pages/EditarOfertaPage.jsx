import { useEffect, useState } from "react";
import { getOfertaById } from "../../../global/api/getOfertaById";
import { WkFooter } from "../../../ui/components/WkFooter"
import { WkHeaderWrapper } from "../../../ui/components/WkHeaderWrapper"
import { OfertaForm } from "../components/nuevaOferta/OfertaForm"
import { useNavigate } from "react-router";
import { prepararOfertaApi } from "../helpers/prepararOfertaApi";
import { editarOferta } from "../api/editarOferta";

export const EditarOfertaPage = () => {

    const id = parseInt(location.pathname.substring(25));
    const navigate = useNavigate();

    const manejarSubmit = async (data) => {
        const ofertaPreparada = prepararOfertaApi(data);
        const resultado = await editarOferta(ofertaPreparada,id);
        if(resultado.status === 201) navigate('/misOfertas/');
    }
    

    return (
    <>
        <WkHeaderWrapper/>
        {/*Si isResolved es true, la promesa se resolvió */}
        <OfertaForm id={id} gestionarSubmit={manejarSubmit}/>
        <WkFooter/>
    </>
    )
}
