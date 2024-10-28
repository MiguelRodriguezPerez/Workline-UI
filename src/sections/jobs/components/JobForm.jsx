import { useContext, useEffect } from 'react';
import { JobContext } from '../context/JobContext';
import { useModalidades } from '../hooks';
import useForm from '../hooks/useForm';
import { useTiposContrato } from '../hooks/useTiposContrato';
import '../styles/jobSearchForm.css';
import { getPageData } from '../helpers/getDataPage';
import { useLocation, useSearchParams } from 'react-router-dom';
import queryString from 'query-string';



// alhost:5173/ofertasDeTrabajo?tipoContratoB=indefinido&salarioAnualMinimo=12000

export const JobForm = () => {

    const location = useLocation();

    const { modalidades } = useModalidades();
    const { tiposContrato } = useTiposContrato();
    const { jobPageState , updatePage } = useContext( JobContext );
    const numberPage = jobPageState.number;
    const [ searchParams, setSearchParams ] = useSearchParams();
    const currentParams = queryString.parse(location.search)

    const initialSearch = {
        puestoB: currentParams.puestoB || '',
        sectorB: currentParams.sectorB || '',
        tipoContratoB: currentParams.tipoContratoB || '',
        ciudadB: currentParams.ciudadB || '',
        salarioAnualMinimo: currentParams.salarioAnualMinimo || 0,
        modalidadB: currentParams.modalidadB || '',
    }

    console.log(initialSearch)
    const { formState, onInputChange, onResetForm, setFormState} = useForm(initialSearch);



    useEffect(() => {
        //Desde url
        //Cambiar estado form
        //Obtener página   
        console.log('Effect')
        const loadResults = async() => {
            updatePage(await getPageData(0, formState));
        }
        loadResults();

    }, [])
    

    //El submit solo cambia la url

    const makeSearch = async(event) =>{
        event.preventDefault();

        const params = {};
        params.numberPage = 0;
        /*Este bucle evita que se añadan a la url campos vacíos o con 0*/
        for (let field in formState) {
            if (formState[field] !== '' && formState[field] !== 0) {
                params[field] = formState[field].toLowerCase();
            }
        }
        setSearchParams(params);
        
    }


    /*El estado del formulario y la información de la página no estan sincronizados,
    tienes que resetear cada cosa por separado*/
    const resetSearch = async(event) => {
        event.preventDefault();

        setSearchParams({});
        const resetSearch = {
            puestoB: '',
            sectorB: '',
            tipoContratoB: '',
            ciudadB: '',
            salarioAnualMinimo: 0,
            modalidadB: '',
        }
        
        
        const resultado = await getPageData(0, resetSearch);
        updatePage(resultado);  
        updateSearch(resetSearch);
        onResetForm(); 
    }
    
  return (
    <aside className='job-search-aside'>
        {
            !Object.is(initialSearch, formState) && 
            <a href="" className='job-search-remove-filters' onClick={resetSearch}>Borrar criterios</a>
        }
        <form className='job-search-form' onSubmit={makeSearch}>
            {/* Acuerdate de asignar value a la etiqueta para que se reflejen los cambios */}
            <label>Puesto</label>
            <input type="text" name='puestoB' value={formState.puestoB} onInput={onInputChange} />
            <label>Tipo Contrato</label>
            <select name='tipoContratoB' value={formState.tipoContratoB} onChange={onInputChange} >
                <option>Selecciona una opcion</option>
                {
                    tiposContrato.map( (tipo) => <option value={tipo} key={tipo}>{tipo.toLowerCase()}</option>)
                }
            </select>
            <label>Ciudad</label>
            <input type="text" name='ciudadB' value={formState.ciudadB} onInput={onInputChange} />
            <label>Salario minímo</label>
            <input type="text" name='salarioAnualMinimo' value={formState.salarioAnualMinimo} onInput={onInputChange} />
            <label>Modalidad</label>
            <select onChange={onInputChange} value={formState.modalidadB} name='modalidadB'>
                <option>Selecciona una opcion</option>
                {
                    
                    modalidades.map( (modalidad) => <option key={modalidad}>{modalidad.toLowerCase()}</option>)
                }
            </select>
            <input type="submit" value="Buscar" />
        </form>
    </aside>
    )
}
