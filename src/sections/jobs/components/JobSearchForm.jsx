import { BusquedaOferta } from '../classes/BusquedaOferta';
import useForm from '../hooks/useForm'
import '../styles/jobSearchForm.css'

export const JobSearchForm = () => {

    const { formState, onInputChange, onResetForm} = useForm({
        puestoB: '',
        tipoContratoB:'',
        ciudad:'',
        salarioMinimo:'',
        modalidadB:''
    });

    const uploadSearch = async (event) => {
        event.preventDefault(); // Evita el comportamiento por defecto del formulario
        console.log(formState); // Muestra el estado del formulario en la consola
    
        try {
            const response = await fetch('http://localhost:9001/internal-api/public/ofertas/search', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formState) // Convierte el estado del formulario a JSON
            });
    
            if (!response.ok) { // Verifica si la respuesta fue exitosa
                throw new Error('Error en la petición: ' + response.status);
            }
    
            const resultados = await response.json(); // Convierte la respuesta a JSON
            console.log(resultados); // Muestra los resultados en la consola
            return resultados; // Devuelve los resultados para su uso posterior
    
        } catch (error) {
            console.error('Hubo un error:', error); // Manejo de errores
        }
    };
    
    // Ejemplo de uso de la función
    // Si la función es parte de un evento de formulario, asegúrate de llamarla correctamente.
    

  return (
    <form className='job-search-form' onSubmit={uploadSearch}>
        <label>Puesto</label>
        <input type="text" name='puestoB' onInput={onInputChange} />
        <label>Tipo Contrato</label>
        <input type="text" name='tipoContratoB' onInput={onInputChange} />
        <label>Ciudad</label>
        <input type="text" name='ciudad' onInput={onInputChange} />
        <label>Salario minímo</label>
        <input type="text" name='salarioMinimo' onInput={onInputChange} />
        <label>Modalidad</label>
        <input type="text" name='modalidadB' onInput={onInputChange} />
        <input type="submit" value="Buscar" />
    </form>
  )
}
