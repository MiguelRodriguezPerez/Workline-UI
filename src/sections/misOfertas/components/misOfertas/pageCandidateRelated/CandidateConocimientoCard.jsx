import '../../../styles/pageCandidateRelated/cardView.css'

export const CandidateConocimientoCard = ({ conocimiento = {} }) => {
  return (
    <section className="nube card-view">
        <h5>{conocimiento.titulo}</h5>
        <div>
            <p>{conocimiento.centroEducativo}</p>
            <p>{conocimiento.inicioPeriodoConocimiento} / {conocimiento.finPeriodoConocimiento}</p>
        </div>
    </section>
  )
}
