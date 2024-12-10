import queryString from 'query-string';
import { useLocation } from 'react-router';

export const useUrlParams = () => {

    const location = useLocation();
    const currentParams = queryString.parse(location.search)

    const initialSearch = {
        numberPage: currentParams.numberPage || 0,
        puesto: currentParams.puesto || '',
        tipoContrato: currentParams.tipoContrato || '',
        ciudad: currentParams.ciudad || '',
        salarioAnualMinimo: currentParams.salarioAnualMinimo || '',
        modalidad: currentParams.modalidad || '',
    }

    const resetSearch = {
        numberPage: 0,
        puesto: '',
        tipoContrato:  '',
        ciudad: '',
        salarioAnualMinimo:  '',
        modalidad:  '',
    }

    return { initialSearch, resetSearch };
}