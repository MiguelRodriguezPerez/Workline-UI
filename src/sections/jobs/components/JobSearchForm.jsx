import { useContext, useEffect } from 'react';
import { JobContext } from '../context/JobContext';
import { useModalidades } from '../hooks';
import useForm from '../hooks/useForm';
import { useTiposContrato } from '../hooks/useTiposContrato';
import '../styles/jobSearchForm.css';
import { getCurrentPage } from '../helpers/getCurrentPage';

export const JobSearchForm = () => {

    const { modalidades } = useModalidades();
    const { tiposContrato } = useTiposContrato();
    const {jobPageState, updatePage} = useContext( JobContext );

    const { formState, onInputChange, onResetForm} = useForm({
        puestoB: '',
        tipoContratoB:'',
        ciudad:'',
        salarioMinimo:'',
        modalidadB:''
    });

    const makeSearch = async(event) =>{
        event.preventDefault();
        console.log(formState)
        const resultado = await getCurrentPage(0,formState);
        console.log(resultado)
        // updatePage(resultado);
    }

    
    // Ejemplo de uso de la función
    // Si la función es parte de un evento de formulario, asegúrate de llamarla correctamente.

  return (
    <form className='job-search-form' onSubmit={makeSearch}>
        <label>Puesto</label>
        <input type="text" name='puestoB' onInput={onInputChange} />
        <label>Tipo Contrato</label>
        <select name='tipoContratoB' onInput={onInputChange} >
            <option value="">Selecciona una opcion</option>
            {
                tiposContrato.map( (tipo) => <option value={tipo} key={tipo}>{tipo.toLowerCase()}</option>)
            }
        </select>
        <label>Ciudad</label>
        <input type="text" name='ciudad' onInput={onInputChange} />
        <label>Salario minímo</label>
        <input type="text" name='salarioMinimo' onInput={onInputChange} />
        <label>Modalidad</label>
        <select onChange={onInputChange} name='modalidadB'>
            <option>Selecciona una opcion</option>
            {
                
                modalidades.map( (modalidad) => <option key={modalidad}>{modalidad.toLowerCase()}</option>)
            }
        </select>
        <input type="submit" value="Buscar" />
    </form>
  )
}
