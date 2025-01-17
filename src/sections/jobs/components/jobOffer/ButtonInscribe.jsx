import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { comprobarInscripcionOferta, desinscribirBusca, inscribirBusca } from "../../api";
import { useSelector } from "react-redux";
import { useButtonInscribe } from "../../hooks";

import '/src/global/styles/elementos.css';


export const ButtonInscribe = () => {
    
    const { isLoading, estaInscrito, inscribeEvent } = useButtonInscribe();

    if (!isLoading) return (
        <button onClick={inscribeEvent} className={estaInscrito ? 'red-button' : 'green-button'}>
            {estaInscrito ? 'Desinscribirse' : 'Inscribirse'}
        </button>
    );
}
