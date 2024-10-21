import '../styles/jobCard.css'

export const JobCard = ({oferta}) => {
  return (
    <li className='job-card'>
        <section className='first-section'>
            <h4>{oferta.puesto}</h4>
            <h5>{oferta.ciudad}</h5>
            <h6>{oferta.nombreEmpresa}</h6>
        </section>
        <section className='second-section'>
            <div>
                <p>{oferta.salarioAnual}</p>
                <p>{oferta.tipoContrato}</p>
                <p>{oferta.horas}</p>
            </div>
            <p>{oferta.fechaPublicacion}</p>
        </section>
    </li>
  )
}
