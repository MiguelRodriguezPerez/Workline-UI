import '../../../styles/seccionBusca/noEntitiesFound.css'

export const NoRegisteredConocimientos = () => {

    return (
        <section className="no-entities-found">
            <img src="/images/miPerfil/seccionBusca/noConocimientos.png" alt="noConocimientos.png"/>
            <div>
                <h2>No tienes conocimientos registrados</h2>
                <p>Registra conocimientos para que las empresas puedan verlos</p>
            </div>
        </section>
    );
}
