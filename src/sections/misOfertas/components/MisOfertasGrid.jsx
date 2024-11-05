import { useContext } from "react";
import { AuthContext } from "../../../global/context/AuthContext";
import { MisOfertasCard } from "./MisOfertasCard";

import '../styles/misOfertasGrid.css'


export const MisOfertasGrid = () => {

    const { user:{ listaOfertas } } = useContext(AuthContext); 

    return (
        <ul className="mis-ofertas-grid">
            {
                listaOfertas.map( oferta => <MisOfertasCard oferta={ oferta }/>)
            }
        </ul>
    )
}
