import { useEffect, useState } from "react"

import '/src/global/styles/formularios.css'
import { ComponenteActivoProvider } from "./ComponenteActivoProvider";

export const NuevaEntidadWrapper = ({titulo = '', NuevaEntidadComponente }) => {

    const [ componenteActivo, setComponenteActivo ] = useState();

    const setNuevaEntidad = () => {
        setComponenteActivo(
            <>
                <p className="heading-link" style={{'width' : 'auto'}}
                onClick={setButtonNuevaEntidad}>Cancelar</p>
                {NuevaEntidadComponente}
            </>
        )
    }

    const setButtonNuevaEntidad = () => {
        setComponenteActivo(
            <button className="green-button" style={{'width' : 'auto'}}
            onClick={setNuevaEntidad}>Crear {titulo}</button>
        )
    }

    useEffect( () => {
        setButtonNuevaEntidad();
    },[])
   

  return (
    //Pasaste la función por un contexto
    <ComponenteActivoProvider value={{setButtonNuevaEntidad}}>
        {componenteActivo}
    </ComponenteActivoProvider>
  )
}
