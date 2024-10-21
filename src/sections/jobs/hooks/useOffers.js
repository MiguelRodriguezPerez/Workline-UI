import { useState } from "react"
import { getOffers } from '../helpers/getOffers'

export const useOffers = () =>{

    const [resultados,setResultados] = useState([]);
    const [isLoading,setLoading] = useState(true);
    const [error,setError] = useState(null);

    const offers = getOffers();

    if(offers){
        setResultados(offers);
        setLoading(false);
    }
    else{
        setError(offers);
        setLoading(false);
    }

    return{
        resultados: offers,
        loading: isLoading,
        error:error
    }
}