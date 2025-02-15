import { useForm } from 'react-hook-form';
import { prepararExperienciaDto } from '../../../helpers/prepararExperienciaDto';
import { guardarNuevaExperiencia } from '/src/global/api/seccionBusca/experiencia'
import { useContext } from 'react';
import { ComponenteActivoContext } from '../ComponenteActivoProvider';
import { compararFechas, convertirFechaCliente, convertirFechaServer } from '../../../../../global/helpers/fechas';

import '../../../styles/seccionBusca/entidadCard.css'
import '/src/global/styles/elementos.css'

export const NuevaExperienciaCard = ({ refreshData }) => {

  const { setButtonNuevaEntidad }  = useContext(ComponenteActivoContext);
  const { register, formState: { errors }, getValues, handleSubmit, reset, setValue } = useForm();

  const newSubmit = async(data) => {

    data.inicioExperiencia = convertirFechaServer(data.inicioExperiencia);
    data.finExperiencia = convertirFechaServer(data.finExperiencia);

    const experienciaPreparada = prepararExperienciaDto(data);
    const resultado = await guardarNuevaExperiencia(experienciaPreparada);
    if( resultado.status === 201 ){

      /*setButtonNuevaEntidad la función que pone el botón verde de Nuevo Conocimiento/Experiencia de miPerfil
      en el DOM tras crear una entidad
      
      La razón por la que estas preguntando si existe es porque este componente se utiliza también
      en la segunda página de crear un nuevo busca*/
      setButtonNuevaEntidad && setButtonNuevaEntidad();
      refreshData();

      /*Cuando creas un nuevo usuario busca los formularios quedan expuestos, de manera que los reinicias*/
      reset();
    }
  }

  

  return (
    <section className="entidad-card nube nueva-entidad">
      <form method="post" onSubmit={handleSubmit(newSubmit)}>
        <section className='entidad-card-section'>
          <div>
            <label>Puesto</label>
            <input type="text" className='form-input'
              {...register('puesto', {
                required: 'Campo obligatorio',
                maxLength: {
                  value: 40,
                  message: 'Máximo 40 carácteres'
                }
              }
              )}
            />
            <p className='mensaje-error'>{errors.puesto?.message}</p>
          </div>

          <div>
            <label htmlFor="empresa">Empresa</label>
            <input type="text" className='form-input'
              {...register('empresa', {
                required: 'Campo obligatorio',
                maxLength: {
                  value: 40,
                  message: 'Máximo 40 carácteres'
                }
              })}
            />
            <p className='mensaje-error'>{errors.empresa?.message}</p>
          </div>
        </section>

        <section className='entidad-card-section'>
          <div>
            <label htmlFor="inicioExperiencia">Fecha inicio</label>
            <input type="text" className='form-input'
              {...register('inicioExperiencia', {
                required: 'Fecha obligatoria',
                pattern: {
                  value: /^([0-2][0-9]|(3)[0-1])\/(0[1-9]|1[0-2])\/([0-9]{4})$/,
                  message: 'Fecha inválida. El formato válido es dd/mm/yyyy'
                }
              })}
            />
            <p className='mensaje-error'>{errors.inicioExperiencia?.message}</p>
          </div>
          <div>
            <label htmlFor="finExperiencia">Fin experiencia</label>
            <input type="text" className='form-input'
              {...register('finExperiencia', {
                required: 'Fecha obligatoria',
                pattern: {
                  value: /^([0-2][0-9]|(3)[0-1])\/(0[1-9]|1[0-2])\/([0-9]{4})$/,
                  message: 'Fecha inválida. El formato válido es dd/mm/yyyy'
                },
                validate: (value) => {
                  if (compararFechas(getValues('inicioExperiencia'), value))
                    return true;
                  else return 'La fecha de fin es anterior a la de inicio';
                }
              })}
            />
            <p className='mensaje-error'>{errors.finExperiencia?.message}</p>
          </div>
        </section>
        <section className='entidad-card-section '>
          <p></p>
          <button className='green-button nueva-entidad'> Subir cambios </button>
        </section>
      </form>
    </section>
  )
}
