import { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { useModalidades, useTiposContrato } from '../../../../global/hooks';
import { useSearchParams } from 'react-router-dom';
import { JobContext } from '../../context/jobPage/JobContext';
import queryString from 'query-string';
import useForm from '../../hooks/useForm';
import { getPageData } from '../../helpers/getDataPage';
import '../../styles/jobPage/jobFormPhone.css';

export const JobFormPhone = () => {

    const [isOpen,setOpen] = useState(false);
    const openMenu = () => {
        setOpen(true);
        document.getElementById('form-desplegable').style.height = '100vh'
        document.body.classList.add("remove-scrolling"); 
    }
    const closeMenu = () => {
        setOpen(false);
        document.getElementById('form-desplegable').style.height = '0vh'
        document.body.classList.remove("remove-scrolling"); 
    }


    const location = useLocation();
    const [ isSearch , setIsSearch ] = useState(false);
    const { modalidades } = useModalidades();
    const { tiposContrato } = useTiposContrato();
    const { jobPageState , updatePage } = useContext( JobContext );
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
    
    const { formState, onInputChange, onResetForm, setFormState} = useForm(initialSearch);

    useEffect(() => {
        //Desde url
        //Cambiar estado form
        //Obtener página   
        console.log('Effect')
        const loadResults = async() => {
            updatePage(await getPageData(currentParams.numberPage, formState));
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

        const resultado = await getPageData(0 , formState);
        updatePage(resultado);
        closeMenu();
    }


    /*El estado del formulario y la información de la página no estan sincronizados,
    tienes que resetear cada cosa por separado*/
    const resetSearch = async(event) => {
        event.preventDefault();

        const params = {};
        params.numberPage = 0;
        setSearchParams(params)
        
        const resetSearch = {
            puestoB: '',
            sectorB: '',
            tipoContratoB: '',
            ciudadB: '',
            salarioAnualMinimo: 0,
            modalidadB: '',
        }
        
        setFormState(prevState => ({
            ...prevState,
            ...resetSearch
        }));
    
        const resultado = await getPageData(0, { ...formState, ...resetSearch });
        updatePage(resultado);
    }


  return (
    <div>
        <button className='job-phone-button' onClick={openMenu}>
            <img src="/images/jobs/lupa.png" alt="" />
            <p>Más filtros</p>
        </button>
        <div id='form-desplegable'>
            
           
            <form className='job-search-form' onSubmit={makeSearch}>

                <section className='form-phone-heading'>
                    <a onClick={resetSearch}>Borrar criterios</a>
                    <a onClick={closeMenu}><img src="/images/jobs/cerrar2.png" alt="" /></a>
                </section>

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
        </div>
    </div>
  )
}
