import { useEffect, useState } from "react";

import '../../styles/seccionBusca/entidadGrid.css';
import { NuevaEntidadWrapper } from "./NuevaEntidadWrapper";

/*clave es un atributo para distinguir los distintos tipos de entidad grid.
Lo necesitas para que cuando cambie el componente activo, se dispare el efecto
de entidad grid (usando clave como dependencia del efecto).

Si no lo pones al cambiar de EntidadGrid react no distinguirá los cambios, 
pensará que es el mismo componente y no ejecutará el efecto.*/
export const EntidadGrid = ( { peticion, Componente, NuevaEntidadComponente, titulo, NoResultsFound } ) => {

    const [ listaEntidades, setListaEntidades ] = useState([]);

    const fetchData = async () => {
        const resultado = await peticion();
        if(resultado.status == 200){
            setListaEntidades( resultado.data );
        }
    }

    useEffect( () => {
        fetchData();
    }, [])

    return (
        <div className="grid-entidad">
            {/*En el grid de ofertas no necesitas este componente*/}
            {NuevaEntidadComponente && 
            <NuevaEntidadWrapper NuevaEntidadComponente={<NuevaEntidadComponente refreshData={fetchData}/>} titulo={titulo}/>}
            <h3>{titulo}</h3>
            
            <ul className="lista-elementos">
                {
                    listaEntidades.length > 0 ?
                    listaEntidades.map((entidad) => (
                        <Componente key={entidad.id} data={entidad} refreshData={fetchData}/>)
                    )
                    :
                    <NoResultsFound/>
                }
            </ul>
        </div>
    )
}
