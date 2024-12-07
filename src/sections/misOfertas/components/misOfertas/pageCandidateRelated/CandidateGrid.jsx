import { useContext, useEffect, useState } from "react";
import { VerCandidatoContext } from "../../../context/verCandidato/VerCandidatoContext";
import { CandidateConocimientoCard } from "./CandidateConocimientoCard";
import { getViewString } from '/src/global/helpers';
import { ExperienciaCard } from '/src/sections/miPerfil/components/usuarioBusca/experiencia';
import { CandidateExperienciaCard } from "./CandidateExperienciaCard";

import '../../../styles/pageCandidateRelated/candidateGridH4.css'

export const CandidateGrid = ({ entidad = ''}) => {
  
    const { candidato } = useContext(VerCandidatoContext);
    const [listaEntidad, setListaEntidad] = useState([]);

    useEffect(() => {
        entidad === 'conocimiento' ? setListaEntidad(candidato.listaConocimientos || []) 
            : setListaEntidad(candidato.listaExperiencias || [])
        
    },[candidato])
  
    return (
        listaEntidad.length > 0 ? 
        <div className="candidate-grid-h4">
            <h4>{getViewString(entidad)}</h4>
            {
                entidad === 'conocimiento' ? 
                    listaEntidad.map( conocimiento => <CandidateConocimientoCard key={conocimiento.id} conocimiento={conocimiento}/>)
                    :
                    listaEntidad.map( experiencia => <CandidateExperienciaCard key={experiencia.id} experiencia={experiencia}/>)
            }
        </div>
        :
        <div className="candidate-grid-h4">
            <h4 style={{border: '0px'}}>Este usuario no tiene {getViewString(entidad)}s</h4>
        </div>

    )
}
