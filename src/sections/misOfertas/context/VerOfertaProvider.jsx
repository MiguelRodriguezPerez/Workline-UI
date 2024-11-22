import { useEffect, useState } from "react";
import { VerOfertaContext } from "./VerOfertaContext";
import { obtenerOfertaPorId } from "../../jobs/api";

export const VerOfertaProvider = ({children}) => {

    const id = parseInt(location.pathname.substring(22));
    const [oferta, setOferta] = useState({});
    const [isResolved, setIsResolved] = useState(false);

    useEffect(() => {
        const effectWrapper = async () => {
            const resultado = await obtenerOfertaPorId(id)
            console.log(resultado)
            setOferta(resultado.data);
            setIsResolved(true);
        }
        effectWrapper();
    },[]);


    if( isResolved ) return <VerOfertaContext.Provider value={{oferta : oferta}}>
        {children}
    </VerOfertaContext.Provider>
}