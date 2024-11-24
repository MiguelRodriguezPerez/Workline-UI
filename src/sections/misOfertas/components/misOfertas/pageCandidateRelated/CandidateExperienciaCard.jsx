import '../../../styles/pageCandidateRelated/cardView.css'

export const CandidateExperienciaCard = ({ experiencia = {} }) => {
  return (
    <section className="nube card-view">
        <h5>{experiencia.puesto}</h5>
        <div>
            <p>{experiencia.empresa}</p>
            <p>{experiencia.inicioExperiencia} / {experiencia.finExperiencia}</p>
        </div>
    </section>
  )
}
