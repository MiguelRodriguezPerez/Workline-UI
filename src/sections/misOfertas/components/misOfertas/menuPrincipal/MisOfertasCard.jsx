import { getViewString } from '/src/global/helpers/getViewString.js';
import { OfertaCardHeading } from './OfertaCardHeading';
import { useNavigate } from 'react-router';

import '../../../styles/misOfertasCard.css';

export const MisOfertasCard = ({ oferta }) => {
  

  const navigate = useNavigate();

  const redirectView = () => {
    navigate(`/misOfertas/verOferta/${oferta.id}`);
  }

  return (
    <li id={ oferta.id } className="mis-ofertas-card">
        <OfertaCardHeading oferta={oferta}/>
        <ul className='card-data' onClick={redirectView}>
            <li>{oferta.salarioAnual} euros anuales</li>
            <li>{ getViewString(oferta.tipoContrato) }</li>
            <li>{oferta.horas} horas</li>
            <li>{oferta.ciudad}</li>
        </ul>
    </li>
  )
}
