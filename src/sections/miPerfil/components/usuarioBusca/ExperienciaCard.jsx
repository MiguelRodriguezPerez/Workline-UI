
export const ExperienciaCard = ( data = {}) => {
    return (
      <section>
          <p>{data.puesto}</p>
          <p>{data.empresa}</p>
          <p>{data.inicioExperiencia}</p>
          <p>{data.finExperiencia}</p>
      </section>
    )
  }
  