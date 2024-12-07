import { useContext, useEffect, useState } from 'react';
import { JobContext } from '../../context/jobPage/JobContext';
import { useModalidades, useTiposContrato } from '../../../../global/hooks';
import { obtenerDatosPagina } from '../../api';
import { useLocation, useSearchParams } from 'react-router-dom';
import { useUrlParams } from '../../hooks'
import { useForm } from 'react-hook-form';

import '../../styles/jobPage/jobFormBase.css'
import '/src/global/styles/formularios.css'
import '/src/global/styles/elementos.css'
import { getViewString } from '../../../../global/helpers';

export const JobFormBase = ({ closeMenu }) => {

    const location = useLocation();
    const { modalidades } = useModalidades();
    const { tiposContrato } = useTiposContrato();
    const { updatePage } = useContext( JobContext );
    const { initialSearch, resetSearch } = useUrlParams();
    const { register, reset, formState : { errors }, handleSubmit } = useForm();

    useEffect(() => {
        //Desde url
        //Cambiar estado form
        //Obtener página   
        const loadResults = async() => {
            const resultado = await obtenerDatosPagina(initialSearch.numberPage, initialSearch);
            if(resultado.status === 200) updatePage(resultado.data);
        }
        loadResults();
    }, [location])
    

    //El submit solo cambia la url

    const makeSearch = async(data) =>{
        console.log(data)
        const resultado = await obtenerDatosPagina(0 , data);
        if(resultado.status === 200) updatePage(resultado.data);
    }

    /*El estado del formulario y la información de la página no estan sincronizados,
    tienes que resetear cada cosa por separado*/
    const resetWrapper = async() => {
        reset();
        const resultado = await obtenerDatosPagina(0, resetSearch);
        updatePage(resultado.data);
    }

    return (
        <form className='job-search-form nube' onSubmit={ handleSubmit(makeSearch) }>
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