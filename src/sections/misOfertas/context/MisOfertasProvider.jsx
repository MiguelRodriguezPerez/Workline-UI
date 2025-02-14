import { useLocation, useNavigate } from 'react-router';
import { MisOfertasContext, misOfertasReducer } from './'
import { getPaginaOfertaContrata } from "/src/global/api/seccionContrata"
import { useEffect, useReducer, useState } from 'react';
import { getCurrentMisOfertasPageUrl } from '../helpers';

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

    const [ misOfertas, dispatch ] = useReducer(misOfertasReducer, [], init);
    const [ numPag, setNumPag ] = useState(0);
    const location = useLocation();
    const navigate = useNavigate();


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

        console.log('aaaaaaaa');
        
        const numPagUrl = location.pathname.toString().substring(12);
        const resultado = await getPaginaOfertaContrata(numPagUrl);
        updatePage(resultado.data);
        
        /*Si se borra la última oferta de una página y no es la última,
        redirigirá a la anterior*/

        let pagUrlActual = getCurrentMisOfertasPageUrl();
        console.log(resultado.data.totalPages - 1)

        if( pagUrlActual !== 0 &&
        (resultado.data.totalPages - 1) < pagUrlActual){
            console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAA')
            navigate(`/misOfertas/${pagUrlActual - 1}`);
        }
    }

    useEffect(() => {
      refreshData();
    }, [location.pathname])

    /*Cuando borras una oferta, la lista de ofertas cambia y necesitas volver a disparar el efecto
    para actualizar los componentes que utilizan los datos de este provider*/
    return <MisOfertasContext.Provider value={{ pagina : misOfertas, servirPagina, refreshData }}>
        {children}
    </MisOfertasContext.Provider>
}