import '../../../styles/seccionBusca/noEntitiesFound.css'

export const NoOfertasInscrito = () => {
    return (
        <section className="no-entities-found">
            <img src="/images/miPerfil/seccionBusca/noJobsInscribed.png" alt="noJobsInscribed.png"/>
            <div>
                <h2>No tienes ofertas registradas</h2>
                <p>Busca ofertas y encuentra oportunidades en nuestra aplicación</p>
            </div>
        </section>
    );
}
