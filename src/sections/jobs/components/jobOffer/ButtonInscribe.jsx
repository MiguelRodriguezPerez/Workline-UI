import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { comprobarInscripcionOferta, desinscribirBusca, inscribirBusca } from "../../api";
import { AuthContext } from "/src/global/context";
import { JobOfferContext } from "../../context/jobOffer/jobOfferContext";

import '/src/global/styles/elementos.css';
import { useSelector } from "react-redux";
import { useButtonInscribe } from "../../hooks";

export const ButtonInscribe = () => {
    
    const { isLoading, estaInscrito, inscribeEvent } = useButtonInscribe();

    if (!isLoading) return (
        <button onClick={inscribeEvent} className={estaInscrito ? 'red-button' : 'green-button'}>
            {estaInscrito ? 'Desinscribirse' : 'Inscribirse'}
        </button>
    );
}
