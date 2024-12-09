import '../../../styles/seccionBusca/noEntitiesFound.css'

export const NoRegisteredExperiencias = () => {

    return (
        <section className="no-entities-found">
            <img src="/images/miPerfil/seccionBusca/noExperiencia.png" alt="noExperiencia.png"/>
            <div>
                <h2>No tienes experiencias registradas</h2>
                <p>Registra experiencias para que las empresas puedan verlos</p>
            </div>
        </section>
    );
}
