import { useEffect, useState } from "react"

import '/src/sections/miPerfil/styles/seccionBusca/entidadGrid.css'

export const GridNuevoUsuarioBuscaEntity = ({ peticion, NuevaEntidadCard ,EntidadCard, titulo = ''}) => {

    const [ listaEntidad, setListaEntidad ] = useState([]);

    const refreshData = async () => {
        const resultado = await peticion();
        if(resultado.status === 200) setListaEntidad(resultado.data)
        else setListaEntidad([]);
    }

    return (
        <div className="grid-entidad">
            <NuevaEntidadCard refreshData={refreshData}/>
            <h3>{titulo}</h3>
            <ul className="lista-elementos">
                {
                    listaEntidad.length > 0 ? (
                    listaEntidad.map((entidad) => (
                        <EntidadCard key={entidad.id} data={entidad} refreshData={refreshData} />
                        ))
                    ) : (
                        <p style={{'textAlign' : 'center'}}>No tienes registros</p>
                    )
                }
            </ul>
        </div>
    )
}
