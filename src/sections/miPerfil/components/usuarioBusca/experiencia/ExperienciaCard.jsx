import { useForm } from 'react-hook-form'
import { editarExperiencia, borrarExperiencia } from '/src/global/api/seccionBusca/experiencia'
import { useSwitchReadOnly, useSwitchHideLabel, useSwitchHideBottomBorder } from '/src/global/hooks'
import { prepararExperienciaDto } from '../../../helpers'
import { OpcionesCard } from '../OpcionesCard'
import { convertirFechaServer, compararFechas, convertirFechaCliente } from '/src/global/helpers/fechas'
import { useEffect } from 'react'

import '../../../styles/seccionBusca/entidadCard.css'
import '/src/global/styles/elementos.css'

export const ExperienciaCard = ({ data = {}, refreshData }) => {

  console.log(data.id)
  const { isReadOnly, turnOffReadOnly, turnOnReadOnly } = useSwitchReadOnly(true, data.id);
  const { turnOffHideLabel, turnOnHideLabel } = useSwitchHideLabel(true, data.id);
  const { turnOnHideBorder, turnOffHideBorder} = useSwitchHideBottomBorder(true, data.id);
  const { register, reset, formState: { errors }, getValues, handleSubmit, setValue } = useForm({
    defaultValues: data
  });

  useEffect(() => {
      /*Convierte las fechas yyyy/mm/dd a dd/mm/yyyy */
      setValue('inicioExperiencia', convertirFechaCliente(data.inicioExperiencia));
      setValue('finExperiencia', convertirFechaCliente(data.finExperiencia));
    }, [data])

  const editSubmit = async (data) => {

    data.inicioExperiencia = convertirFechaServer(data.inicioExperiencia);
    data.finExperiencia = convertirFechaServer(data.finExperiencia);

    const experienciaDto = prepararExperienciaDto(data);
    const resultado = await editarExperiencia(experienciaDto, data.id);

    if (resultado.status === 201) {
      refreshData();
      turnOnReadOnly();
      turnOnHideLabel();
      turnOnHideBorder();
    }
  }

  const callbackOpcionesCard = () => {
    turnOffHideLabel();
    turnOffReadOnly();
    turnOffHideBorder();
  }

  const cancelEvent = () => {
    turnOnHideLabel();
    turnOnReadOnly();
    turnOnHideBorder();
    reset();
  }

  const borrarExperienciaCallback = async (id) => {
    const resultado = await borrarExperiencia(id);
    console.log(resultado)
    if(resultado.status === 204) refreshData();
  }

  return (
    <li className='entidad-card nube' id={data.id}>
      <form method="post" onSubmit={handleSubmit(editSubmit)}>
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
            <OpcionesCard activarEdicion={callbackOpcionesCard} borrarEntidad={() => {borrarExperienciaCallback(data.id)}}/>
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
            <p onClick={cancelEvent}>Cancelar</p>
            <button className='green-button'> Subir cambios </button>
          </section>
        }
      </form>
    </li>
  )
}
