import { OpcionesCard } from '../OpcionesCard'
import { useSwitchHideLabel, useSwitchReadOnly, useSwitchHideBottomBorder } from '/src/global/hooks'
import { useForm } from 'react-hook-form'
import { prepararConocimientoDto } from '../../../helpers'
import { editarConocimiento, borrarConocimiento } from '/src/global/api/seccionBusca/conocimiento'
import { compararFechas } from '../../../../../global/helpers/fechas/compararFechas'
import { useEffect } from 'react'
import { convertirFechaCliente, convertirFechaServer } from '../../../../../global/helpers/fechas'

import '../../../styles/seccionBusca/entidadCard.css'
import '/src/global/styles/elementos.css'

export const ConocimientoCard = ( { data = {}, refreshData }) => {

  const { turnOnHideLabel, turnOffHideLabel } = useSwitchHideLabel(true, data.id);
  const { isReadOnly, turnOffReadOnly, turnOnReadOnly } = useSwitchReadOnly(true, data.id);
  const { turnOnHideBorder, turnOffHideBorder} = useSwitchHideBottomBorder(true, data.id);
  const { register, reset, formState: { errors }, getValues, setValue, handleSubmit } = useForm({
    defaultValues: data
  });

  useEffect(() => {
    /*Convierte las fechas yyyy/mm/dd a dd/mm/yyyy */
    setValue('inicioPeriodoConocimiento', convertirFechaCliente(data.inicioPeriodoConocimiento));
    setValue('finPeriodoConocimiento', convertirFechaCliente(data.finPeriodoConocimiento));
  }, [data]);

  const callbackOpcionesCard = () => {
    turnOffHideLabel();
    turnOffReadOnly();
    turnOffHideBorder();
  }

  const cancelEvent = () => {
    turnOnReadOnly();
    turnOnHideLabel();
    turnOnHideBorder();
    reset();
  }

  const editSubmit = async (data) => {

    data.inicioPeriodoConocimiento = convertirFechaServer(data.inicioPeriodoConocimiento);
    data.finPeriodoConocimiento = convertirFechaServer(data.finPeriodoConocimiento);

    const conocimientoDto = prepararConocimientoDto(data);
    const resultado = await editarConocimiento(conocimientoDto, data.id);

    if (resultado.status === 201) {
      refreshData();
      turnOnReadOnly();
      turnOnHideLabel();
      turnOnHideBorder();
    }
  }

  const borrarOfertaCallback = async (id) => {
    const resultado = await borrarConocimiento(id);
    if(resultado.status === 204) refreshData();
  }

  return (
    <li className='entidad-card nube' id={data.id}>
        <form method="post" onSubmit={handleSubmit(editSubmit)}>
          <section className='entidad-card-section primer-section'>
            <div>
              <label htmlFor="titulo">Titulo</label>
              <input type="text" className='form-input' 
                {...register('titulo' , {
                  required : 'Campo obligatorio',
                  maxLength : {
                    value : 40,
                    message : 'Máximo 40 carácteres'
                  }
                })}
              />
              <p className='mensaje-error'>{errors.titulo?.message}</p>
            </div>
            <div>
              <label htmlFor="centroEducativo">Centro Educativo</label>
              <input type="text" className='form-input' 
                {...register('centroEducativo' , {
                  required : 'Campo obligatorio',
                  maxLength : {
                    value : 40,
                    message : 'Máximo 40 carácteres'
                  }
                })}
              />
              <p className='mensaje-error'>{errors.centroEducativo?.message}</p>
            </div>
            <div className='div-opciones'>
              <OpcionesCard activarEdicion={callbackOpcionesCard} 
                borrarEntidad={() => { borrarOfertaCallback(data.id) }}
              />
            </div>
          </section>

          <section className='entidad-card-section'>
          <div>
            <label htmlFor="inicioPeriodoConocimiento">Fecha inicio</label>
            <input type="text" className='form-input'
              {...register('inicioPeriodoConocimiento', {
                required: 'Fecha obligatoria',
                pattern: {
                  value: /^([0-2][0-9]|(3)[0-1])\/(0[1-9]|1[0-2])\/([0-9]{4})$/,
                  message: 'Fecha inválida. El formato válido es dd/mm/yyyy'
                }
              })}
            />
            <p className='mensaje-error'>{errors.inicioPeriodoConocimiento?.message}</p>
          </div>
          <div>
            <label htmlFor="finPeriodoConocimiento">Fin período estudios</label>
            <input type="text" className='form-input'
              {...register('finPeriodoConocimiento', {
                required: 'Fecha obligatoria',
                pattern: {
                  value: /^([0-2][0-9]|(3)[0-1])\/(0[1-9]|1[0-2])\/([0-9]{4})$/,
                  message: 'Fecha inválida. El formato válido es dd/mm/yyyy'
                },
                validate: (value) => {
                  if (compararFechas(getValues('inicioPeriodoConocimiento'), value))
                    return true;
                  else return 'La fecha de fin es anterior a la de inicio'
                }
              })}
            />
            <p className='mensaje-error'>{errors.finPeriodoConocimiento?.message}</p>
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
