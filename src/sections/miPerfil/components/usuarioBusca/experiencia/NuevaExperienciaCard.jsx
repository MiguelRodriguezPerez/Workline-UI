import { useForm } from 'react-hook-form';
import { prepararExperienciaDto } from '../../../helpers/prepararExperienciaDto';
import { guardarNuevaExperiencia } from '/src/global/api/seccionBusca/experiencia'
import { compararFechas } from '../../../../../global/helpers/fechas/compararFechas';

import '../../../styles/seccionBusca/entidadCard.css'
import '/src/global/styles/elementos.css'

export const NuevaExperienciaCard = ({ refreshData }) => {

  const newSubmit = async(data) => {
    const experienciaPreparada = prepararExperienciaDto(data);
    const resultado = await guardarNuevaExperiencia(experienciaPreparada);
    if( resultado.status === 201 ){
      refreshData();
    }
  }

  const { register, formState: { errors }, getValues, handleSubmit } = useForm();

  return (
    <section className="entidad-card nube">
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
                  value: /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/,
                  message: 'Fecha inválida. El formato válido es dd-mm-yyyy'
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
                  value: /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/,
                  message: 'Fecha inválida. El formato válido es dd-mm-yyyy'
                },
                validate: (value) => {
                  if (!compararFechas(getValues('inicioExperiencia'), value))
                    return true;
                  else return 'Fechas incorrectas'
                }
              })}
            />
            <p className='mensaje-error'>{errors.finExperiencia?.message}</p>
          </div>
        </section>
        <section className='entidad-card-section'>
          <p></p>
          <button className='green-button nueva-entidad'> Subir cambios </button>
        </section>
      </form>
    </section>
  )
}
