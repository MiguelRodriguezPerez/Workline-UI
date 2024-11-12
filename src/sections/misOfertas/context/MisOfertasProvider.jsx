import { MisOfertasContext, misOfertasReducer } from './'
import { getPaginaOfertaContrata } from '../api/getPaginaOfertaContrata'
import { useEffect, useReducer, useState } from 'react';


const init = () => {
    return {
        number: 0,
        content: [],
        totalElements: 0,
        totalPages: 0,
        numberOfElements: 0
    };
};

export const MisOfertasProvider = ({ children }) => {

    const [misOfertas, dispatch] = useReducer(misOfertasReducer, [], init);
    const [numPag, setNumPag] = useState(0);

    const updatePage = (page = {}) => {
        const action = {
            type: 'update_page',
            payload: {
                number: page.number,
                content: page.content || [],
                totalElements: page.totalElements || 0,
                totalPages: page.totalPages || 0,
                numberOfElements: page.numberOfElements || 0
            }
        };
        dispatch(action);
    };

    const servirPagina = (num) => {
        setNumPag(num);
    }


    useEffect(() => {
        /*Axios no te devuelve el objeto de la api directamente, sino que devuelve un objeto
        con varios campos sobre la respuesta de la api, entre ellos data que son los datos que solicitaste */
      const effectWrapper = async () => {
        const resultado = await getPaginaOfertaContrata(numPag);
        updatePage(resultado.data);
      }
      effectWrapper();
    }, [numPag])

    return <MisOfertasContext.Provider value={{ pagina : misOfertas, servirPagina }}>
        {children}
    </MisOfertasContext.Provider>
}