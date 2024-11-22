
export const CandidateCard = ({candidato}) => {

    const { listaConocimientos = [], listaExperiencias = [] } = candidato;

    return (
    <li>
        <section>
            <div>
                <h3>{candidato.nombre}</h3>
            </div>
            <div>
                <p>{candidato.ciudad}</p>
            </div>
        </section>
        <section>
            <p>{candidato.telefono}</p>
        </section>
        <section>
            <p>{candidato.email}</p>
        </section>
        <section>
            <div>
                {
                    listaConocimientos.length > 0 &&
                    <ul>
                        {listaConocimientos.map( entidad  => <p>{JSON.stringify(entidad)}</p>)}
                    </ul>
                }
            </div>
            <div>
            {
                    listaExperiencias.length > 0 &&
                    <ul>
                        {listaExperiencias.map( entidad  => <p>{JSON.stringify(entidad)}</p>)}
                    </ul>
                }
            </div>
        </section>

    </li>
    )
}
