import { getViewString } from '/src/global/helpers/getViewString.js'

import '../styles/misOfertasCard.css'

export const MisOfertasCard = ({ oferta }) => {
  return (
    <li id={ oferta.id } className="mis-ofertas-card">
        <section className='card-heading'>
            <h4>{oferta.puesto}</h4>
            <img src="/images/misOfertas/editar.png" alt="editar.png" />
            <img src="/images/misOfertas/borrar.png" alt="borrar.png" />
        </section>
        <ul className='card-data'>
            <li>{oferta.salarioAnual} euros anuales</li>
            <li>{ getViewString(oferta.tipoContrato) }</li>
            <li>{oferta.horas} horas</li>
            <li>{oferta.ciudad}</li>
        </ul>
    </li>
  )
}

// ciudad
// : 
// "Jaen"
// descripcion
// : 
// "Servir copas"
// fechaPublicacion
// : 
// "2024-11-01"
// horas
// : 
// 12
// id
// : 
// 1
// modalidadTrabajo
// : 
// "PRESENCIAL"
// nombreEmpresa
// : 
// "laura"
// puesto
// : 
// "Camarero"
// salarioAnual
// : 
// 15000
// sector
// : 
// "Hosteleria"
// tipoContrato
// : 
// "TEMPORAL"