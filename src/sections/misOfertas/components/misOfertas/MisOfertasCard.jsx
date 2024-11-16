import { getViewString } from '/src/global/helpers/getViewString.js'

import '../../styles/misOfertasCard.css'
import { useNavigate } from 'react-router'
import { borrarOferta } from '/src/global/api/ofertas';
import { useContext } from 'react';
import { MisOfertasContext } from '../../context';

export const MisOfertasCard = ({ oferta }) => {

  const { servirPagina } = useContext(MisOfertasContext);
  const navigate = useNavigate();

  const redirectView = () => {
    navigate(`/misOfertas/verOferta/${oferta.id}`);
  }

  const redirectEdit = () => {
    navigate(`/misOfertas/editarOferta/${oferta.id}`);
  }

  const redirectDelete = () => {
    borrarOferta(oferta.id);
    servirPagina(0);
  }

  return (
    <li id={ oferta.id } className="mis-ofertas-card">
        <section className='card-heading'>
            <h4 onClick={redirectView}>{oferta.puesto}</h4>
            <img src="/images/misOfertas/editar.png" alt="editar.png" onClick={redirectEdit} />
            <img src="/images/misOfertas/borrar.png" alt="borrar.png" onClick={redirectDelete} />
        </section>
        <ul className='card-data' onClick={redirectView}>
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