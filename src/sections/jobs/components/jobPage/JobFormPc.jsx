import { useContext, useEffect, useState } from 'react';
import { JobContext } from '../../context/jobPage/JobContext';
import useForm from '../../hooks/useForm';
import { useModalidades, useTiposContrato } from '../../../../global/hooks';
import { obtenerDatosPagina } from '../../api';
import { useLocation, useSearchParams } from 'react-router-dom';
import queryString from 'query-string';

import '../../styles/jobPage/jobSearchForm.css';


export const JobFormPc = () => {

    const location = useLocation();
    const { modalidades } = useModalidades();
    const { tiposContrato } = useTiposContrato();
    const { updatePage } = useContext( JobContext );
    const [ searchParams, setSearchParams ] = useSearchParams();
    const currentParams = queryString.parse(location.search)

    const initialSearch = {
        numberPage: currentParams.numberPage || 0,
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
        const loadResults = async() => {
            const resultado = await obtenerDatosPagina(currentParams.numberPage, formState);
            console.log(resultado.data)
            if(resultado.status === 200){
                updatePage(resultado.data);
            } 
        }
        loadResults();
    }, [location])
    

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

        const resultado = await obtenerDatosPagina(0 , formState);
        updatePage(resultado.data);
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
    
        const resultado = await obtenerDatosPagina(0, initialSearch);

        updatePage(resultado.data);
        updateSearch(initialSearch);
        window.location.reload();
    }
    
  return (
    <aside className='job-search-aside'>
        {
            //Object.keys(currentParams).length te dice el número de campos de un objeto
            Object.keys(currentParams).length > 1 && 
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
