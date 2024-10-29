import { useNavigate } from 'react-router';
import '../styles/jobCard.css'

export const JobCard = ({oferta}) => {
  const navigate = useNavigate();

  const redirect = () => {
    const id = oferta.id
    navigate(`/ofertasDeTrabajo/oferta/${id}`);
  }

  return (
    <li className='job-card' onClick={redirect}>
        <section className='first-section'>
            <h4>{oferta.puesto}</h4>
            <h5>{oferta.ciudad}</h5>
            <h6>{oferta.nombreEmpresa}</h6>
        </section>
        <ul className='second-section'>
          <li>{oferta.salarioAnual}</li>
          <li>{oferta.tipoContrato}</li>
          <li>{oferta.horas + ' horas'}</li>
          <li>{oferta.fechaPublicacion}</li>
        </ul>
    </li>
  )
}
