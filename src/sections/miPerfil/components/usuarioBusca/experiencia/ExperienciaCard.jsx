import { useForm } from 'react-hook-form'
import { useSwitchReadOnly, useSwitchHideLabel, useSwitchHideBottomBorder } from '/src/global/hooks'
import { OpcionesCard } from '../OpcionesCard'
import { compararFechas, convertirFechaCliente } from '/src/global/helpers/fechas'
import { useEffect } from 'react'
import { useCardEditOptions, usePeticionesExperiencia } from '../../../hooks'

import '../../../styles/seccionBusca/entidadCard.css'
import '/src/global/styles/elementos.css'

export const ExperienciaCard = ({ data = {}, refreshData }) => {

  const { isReadOnly, activarEdicionCard, desactivarEdicionCard } = useCardEditOptions( data.id );
  const { editarExperienciaSubmit, borrarExperienciaSubmit } = usePeticionesExperiencia( data.id, refreshData );
  const { register, reset, formState: { errors }, getValues, handleSubmit, setValue } = useForm({
    defaultValues: data
  });

  useEffect(() => {
      /*Convierte las fechas yyyy/mm/dd a dd/mm/yyyy */
      setValue('inicioExperiencia', convertirFechaCliente(data.inicioExperiencia));
      setValue('finExperiencia', convertirFechaCliente(data.finExperiencia));
    }, [data])


  return (
    <li className='entidad-card nube' id={data.id}>
      <form method="post" onSubmit={handleSubmit(editarExperienciaSubmit)}>
        <section className='entidad-card-section primer-section'>
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
          <div className='div-opciones'>
            <OpcionesCard activarEdicion={activarEdicionCard} 
              borrarEntidad={borrarExperienciaSubmit}/>
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
                  else return 'La fecha de fin es anterior a la de inicio'
                }
              })}
            />
            <p className='mensaje-error'>{errors.finExperiencia?.message}</p>
          </div>
        </section>
        {
          !isReadOnly &&
          <section className='entidad-card-section ultimo-section'>
            <p onClick={() => { desactivarEdicionCard(reset) } }>Cancelar</p>
            <button className='green-button'> Subir cambios </button>
          </section>
        }
      </form>
    </li>
  )
}
