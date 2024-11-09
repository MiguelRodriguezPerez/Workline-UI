import { useContext } from "react";
import { AuthContext } from "../../../global/context/AuthContext";
import { MisOfertasCard } from "./MisOfertasCard";

import '../styles/misOfertasGrid.css'
import { MisOfertasContext } from "../context";


export const MisOfertasGrid = () => {

    const { pagina } = useContext(MisOfertasContext);
    console.log(pagina)

    return (
        <ul className="mis-ofertas-grid">
            {
                pagina.content.map( oferta => <MisOfertasCard oferta={oferta}/>)
            }
        </ul>
    )
}
