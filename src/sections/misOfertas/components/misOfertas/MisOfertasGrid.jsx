import { useContext } from "react";
import { AuthContext } from "../../../../global/context/AuthContext";
import { MisOfertasCard } from "./MisOfertasCard";

import '../../styles/misOfertasGrid.css'
import { MisOfertasContext } from "../../context";


export const MisOfertasGrid = () => {

    const { pagina } = useContext(MisOfertasContext);

    return (
        <ul className="mis-ofertas-grid">
            {
                pagina.content.map( oferta => <MisOfertasCard key={oferta.id} oferta={oferta}/>)
            }
        </ul>
    )
}
