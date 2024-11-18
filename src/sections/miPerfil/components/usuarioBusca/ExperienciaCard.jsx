import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { compararFechas } from '../../../../global/helpers/fechas/compararFechas'
import { useSwitchReadOnly } from '../../../../global/hooks'
import { OpcionesCard } from './OpcionesCard'
import { prepararExperiencia } from '../../helpers/prepararExperiencia'


import '../../styles/seccionBusca/entidadCard.css'
import '/src/global/styles/elementos.css'
import { editarConocimiento } from '../../../../global/api/seccionBusca/editarConocimiento'


export const ExperienciaCard = ( { data = {} }) => {

  const { isReadOnly, turnOffReadOnly, turnOnReadOnly } = useSwitchReadOnly(false);
  const { register, reset, formState : { errors }, getValues, handleSubmit } = useForm({
    defaultValues : data
  });

  //Por defecto no aplica data
  useEffect(() => {
    reset(data);
  },[data])

  const editSubmit = async(data) => {
    const fecha = prepararExperiencia(data);
    const resultado = editarConocimiento(fecha);
    console.log(resultado)
  }

  return (
    <li className='entidad-card nube'>
        <form method="post" onSubmit={handleSubmit(editSubmit)}>
          <section className='entidad-card-section'>
            <div>
              <label>Puesto</label>
              <input type="text" className='form-input'
                {...register('puesto', {
                  required : 'Campo obligatorio',
                  maxLength : {
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
                  required : 'Campo obligatorio',
                  maxLength: {
                    value: 40,
                    message: 'Máximo 40 carácteres'
                  }
                })}
                />
               <p className='mensaje-error'>{errors.empresa?.message}</p>
            </div>
            <div>
              <OpcionesCard turnOnReadOnly={turnOffReadOnly}/>
            </div>
          </section>
          
          <section className='entidad-card-section'>
            <div>
              <label htmlFor="inicioExperiencia">Fecha inicio</label>
              <input type="text" className='form-input'
                {...register('inicioExperiencia', {
                  required : 'Fecha obligatoria',
                  pattern : {
                    value : /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/,
                    message : 'Fecha inválida. El formato válido es dd-mm-yyyy'
                  }
                })}
              />
              <p className='mensaje-error'>{errors.inicioExperiencia?.message}</p>
            </div>
            <div>
              <label htmlFor="finExperiencia">Fin experiencia</label>
              <input type="text" className='form-input'
                {...register('finExperiencia', {
                  required : 'Fecha obligatoria',
                  pattern : {
                    value : /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/,
                    message : 'Fecha inválida. El formato válido es dd-mm-yyyy'
                  } ,
                  validate : (value) => {
                    if(!compararFechas(getValues('inicioExperiencia') , value))
                      return true;
                    else return 'Fechas incorrectas'
                  }
                })}
              />
              <p className='mensaje-error'>{errors.finExperiencia?.message}</p>
            </div>
          </section>
            {
                !isReadOnly && 
                <section className='entidad-card-section'>
                  <p onClick={turnOnReadOnly}>Cancelar</p>
                  <button className='green-button'> Subir cambios </button>
                </section>
            }
        </form>
    </li>
  )
}

{/* <li className='entidad-card nube'>
        <h3>{data.puesto}</h3>
        <OpcionesCard/>
        <p>{data.empresa}</p>
        <p>{data.inicioExperiencia + ' ' + data.finExperiencia}</p>
    </li> */}
  