import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../../global/context/AuthContext";
import { MisOfertasCard } from "./MisOfertasCard";
import { MisOfertasContext } from "../../../context";

import '../../../styles/misOfertasGrid.css'

export const MisOfertasGrid = () => {

    const { pagina } = useContext(MisOfertasContext);
    const [ paginaState, setPaginaState ] = useState([]);

    useEffect(() => {
        setPaginaState(pagina.content);
    },[pagina]);

    return (
        <ul className="mis-ofertas-grid">
            {
                paginaState.map(oferta => <MisOfertasCard key={oferta.id} oferta={oferta} />)
            }
        </ul>
    )
}
