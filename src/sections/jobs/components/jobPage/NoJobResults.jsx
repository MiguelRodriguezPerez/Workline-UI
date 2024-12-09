import '../../styles/jobPage/noJobResults.css'

export const NoJobResults = () => {
  return (
    <section className="no-job-results">
        <img src="/images/jobs/noResults.png" alt="no_hay_resultados.png"/>
        <div>
            <h2>No hemos encontrado resultados</h2>
            <p>Prueba con otros criterios de búsqueda</p>
        </div>
    </section>
  );
}
