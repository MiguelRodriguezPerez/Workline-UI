

export const ConocimientoCard = ( data = {}) => {
  return (
    <section>
        <p>{data.centroEducativo}</p>
        <p>{data.titulo}</p>
        <p>{data.inicioPeriodoConocimiento}</p>
        <p>{data.finPeriodoConocimiento}</p>
    </section>
  )
}
