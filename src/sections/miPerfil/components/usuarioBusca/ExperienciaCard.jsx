import { OpcionesCard } from './OpcionesCard'

import '../../styles/seccionBusca/entidadCard.css'
import '/src/global/styles/elementos.css'
import { useForm } from 'react-hook-form'

export const ExperienciaCard = ( { data = {} }) => {

  const { register } = useForm({
    defaultValues : data
  })

  return (
    <li className='entidad-card nube'>
        <form method="post">
          <input type="text" 
            {...register('puesto', {
              maxLength : {
                value: 40,
                message: 'Máximo 40 carácteres'
              }
            }
            )}
          />
          <input type="text"
            {...register('experiencia', {
              maxLength: {
                value: 40,
                message: 'Máximo 40 carácteres'
              }
            }
            )}
           />
          <input type="text" />
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
  