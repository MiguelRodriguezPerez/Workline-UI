import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../../global/context/AuthContext";
import { MisOfertasCard } from "./MisOfertasCard";
import { MisOfertasContext } from "../../../context";

import '../../../styles/misOfertasGrid.css'

export const MisOfertasGrid = () => {

    const { pagina } = useContext(MisOfertasContext);

    return (
        <ul className="mis-ofertas-grid">
            {
                pagina.content.map(oferta => <MisOfertasCard key={oferta.id} oferta={oferta} />)
            }
        </ul>
    )
}
