import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { VerCandidatoContext } from "./VerCandidatoContext";
import { getCandidatoPorNombre } from '/src/global/api/seccionContrata'

export const VerCandidatoProvider = ({ children }) => {

    const location = useLocation();
    //Obtiene el nombre a partir de la última '/' de la url
    const nombre = location.pathname.toString().split('/')[3];
    const [candidato, setCandidato] = useState({});
    const [isResolved, setIsResolved] = useState(false);

    const effectWrapper = async () => {
        const resultado = await getCandidatoPorNombre(nombre);
        if(resultado.status == 200) setCandidato(resultado.data);
        setIsResolved(true);
    }

    useEffect(() =>{
        effectWrapper();
    },[])


    return <VerCandidatoContext.Provider value={{candidato: candidato}}>
        {children}
    </VerCandidatoContext.Provider>
}