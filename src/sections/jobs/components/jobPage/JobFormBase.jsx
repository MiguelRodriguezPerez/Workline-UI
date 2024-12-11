import { useContext, useEffect, useState } from 'react';
import { JobContext } from '../../context/jobPage/JobContext';
import { useModalidades, useTiposContrato } from '../../../../global/hooks';
import { obtenerDatosPagina } from '../../api';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { useUrlParams } from '../../hooks'
import { useForm } from 'react-hook-form';
import { getViewString } from '../../../../global/helpers';

import '../../styles/jobPage/jobFormBase.css'
import '/src/global/styles/formularios.css'
import '/src/global/styles/elementos.css'


export const JobFormBase = ({ closeMenu }) => {

    const location = useLocation();
    const navigate = useNavigate();
    const { modalidades } = useModalidades();
    const { tiposContrato } = useTiposContrato();
    const { updatePage } = useContext( JobContext );
    const { initialSearch, resetSearch } = useUrlParams();
    const { register, reset, formState : { errors }, handleSubmit, setValue } = useForm();

    useEffect(() => {
        //Desde url
        //Cambiar estado form
        //Obtener página   
        const loadResults = async() => {
            const resultado = await obtenerDatosPagina(initialSearch.numberPage, initialSearch);
            if(resultado.status === 200) updatePage(resultado.data);
        }
        loadResults();
        reset(initialSearch);

    }, [location])
    

    //El submit solo cambia la url
    const makeSearch = (data) =>{
        const queryString = new URLSearchParams(data).toString(); 
        let url = `/ofertasDeTrabajo/?${queryString}`;
        /*Originalmente estabas enviando el mismo número de página en el que te encontrabas
        causando que si estabas en la página 3 y la búsqueda solo tenía una página de resultado
        provocabas una excepción en el lado servidor y no recibías resultados aunque existieran
        
        Esta línea cambia el numberPage actual de la url por 0 para garantizar que si hay resultados
        aunque sea solo una página, los muestre*/
        url = url.replace(/(\?numberPage=)\d+/, '?numberPage=0');
        navigate(url);
        closeMenu();
    }

    /*El estado del formulario y la información de la página no estan sincronizados,
    tienes que resetear cada cosa por separado*/
    const resetWrapper = async() => {
        reset({ puesto: '', tipoContrato: '', ciudad: '', salarioAnualMinimo: '', modalidad: '' });
        const resultado = await obtenerDatosPagina(0, resetSearch);
        updatePage(resultado.data);
        navigate('/ofertasDeTrabajo/?numberPage=0');
    }

    return (
        <form className='job-search-form nube' onSubmit={ handleSubmit(makeSearch) } id='formulario-base'>
            <div>
                <p onClick={ resetWrapper } className='job-search-remove-filters'>Reiniciar formulario</p>
                {
                    /*Si le llega el callback de cerrar el menú del teléfono, significa
                    que este componente esta siendo usado por JobFormPhone*/
                    closeMenu &&
                    <img src="/images/jobs/cerrar2.png" alt="cerrar.png" onClick={closeMenu} />
                }
            </div>

            <label>Puesto</label>
            <input type="text" className='form-input' {...register('puesto')}  />

            <label>Tipo Contrato</label>
            <select className='form-input' {...register('tipoContrato')} >
                <option value=''>Selecciona una opción</option>
                {
                    tiposContrato.map( (tipo) => <option value={tipo} key={tipo}>{getViewString(tipo)}</option>)
                }
            </select>

            <label>Ciudad</label>
            <input type="text" className='form-input' {...register('ciudad')} />

            <label>Salario minímo</label>
            <input type="text" className='form-input' 
                {...register('salarioAnualMinimo' , 
                   { 
                        pattern : {
                            value : /^\d+$/,
                            message : 'El salario debe ser un número'
                        }
                    }
                )} />
            <p className="mensaje-error">{errors.salarioAnualMinimo?.message}</p>

            <label>Modalidad</label>
            <select className='form-input' {...register('modalidad')}>
                <option value='' >Selecciona una opción</option>
                {   
                    modalidades.map( (modalidad) => <option key={modalidad}>{getViewString(modalidad)}</option>)
                }
            </select>

            <input type="submit" className='green-button' value="Buscar" />
        </form>
    )
}