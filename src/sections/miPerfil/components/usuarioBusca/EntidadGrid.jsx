import { useEffect, useState } from "react";
import { CabeceraMiPerfil } from "../CabeceraMiPerfil";
import { getViewString } from '/src/global/helpers'

import '../../styles/seccionBusca/entidadGrid.css'

/*clave es un atributo para distinguir los distintos tipos de entidad grid.
Lo necesitas para que cuando cambie el componente activo, se dispare el efecto
de entidad grid (usando clave como dependencia del efecto).

Si no lo pones al cambiar de EntidadGrid react no distinguirá los cambios, 
pensará que es el mismo componente y no ejecutará el efecto.*/
export const EntidadGrid = ( { peticion, Componente, NuevaEntidadComponente, titulo } ) => {

    const [ listaEntidades, setListaEntidades ] = useState([]);
    const [ peticionResuelta, setPeticionResuelta ] = useState(false);

    useEffect( () => {
        const fetchData = async () => {

            const resultado = await peticion();
            if(resultado.status == 200){
                setListaEntidades( resultado.data );
                setPeticionResuelta( true );
            }
            else setPeticionResuelta( true );
        }
        fetchData();
    } , [peticion]);

    return (
        <div className="grid-entidad">
            <h3>{titulo}</h3>
            {/*En la creación de usuarios no necesitas este componente*/}
            {NuevaEntidadComponente && <NuevaEntidadComponente/>}
            <ul className="lista-elementos">
                {
                    peticionResuelta
                    && listaEntidades.map((entidad) => (
                        <Componente key={entidad.id} data={entidad}/>
                    ))
                }
            </ul>
        </div>
    )
}
