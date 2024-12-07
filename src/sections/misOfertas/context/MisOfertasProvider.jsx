import { MisOfertasContext, misOfertasReducer } from './'
import { getPaginaOfertaContrata } from "/src/global/api/seccionContrata"
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

    const refreshData = async () => {
        console.log(numPag)
        const resultado = await getPaginaOfertaContrata(numPag);
        updatePage(resultado.data);
    }

    useEffect(() => {
        /*Axios no te devuelve el objeto de la api directamente, sino que devuelve un objeto
        con varios campos sobre la respuesta de la api, entre ellos data que son los datos que solicitaste */
      refreshData();
    }, [numPag])

    /*Cuando borras una oferta, la lista de ofertas cambia y necesitas volver a disparar el efecto
    para actualizar los componentes que utilizan los datos de este provider*/
    return <MisOfertasContext.Provider value={{ pagina : misOfertas, servirPagina, refreshData }}>
        {children}
    </MisOfertasContext.Provider>
}