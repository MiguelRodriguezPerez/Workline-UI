import { useContext, useEffect } from 'react';
import { JobContext } from '../context/JobContext';
import { useModalidades } from '../hooks';
import useForm from '../hooks/useForm';
import { useTiposContrato } from '../hooks/useTiposContrato';
import '../styles/jobSearchForm.css';
import { getPageData } from '../helpers/getDataPage';


const initialSearchState = {
    puestoB: '',
    sectorB: '',
    tipoContratoB:'',
    ciudadB:'',
    salarioAnualMinimo:0,
    modalidadB:''
}

export const JobSearchForm = () => {

    const { modalidades } = useModalidades();
    const { tiposContrato } = useTiposContrato();
    const { jobPageState, updatePage } = useContext( JobContext );

    console.log(jobPageState)

    const { formState, onInputChange, onResetForm} = useForm(initialSearchState);

    const makeSearch = async(event) =>{
        event.preventDefault();
        const resultado = await getPageData(0,formState);
        updatePage(resultado);
    }

    /*El estado del formulario y la información de la página no estan sincronizados,
    tienes que resetear cada cosa por separado*/
    const resetSearch = async(event) => {
        event.preventDefault();
        onResetForm(); 
        const resultado = await getPageData(0, initialSearchState);
        updatePage(resultado);  
    }
  return (
    <aside className='job-search-aside'>
        {
            !Object.is(initialSearchState, formState) && 
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
