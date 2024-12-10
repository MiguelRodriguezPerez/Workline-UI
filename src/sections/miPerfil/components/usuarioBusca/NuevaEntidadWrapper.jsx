import { useEffect, useState } from "react"

import '/src/global/styles/formularios.css'
import { ComponenteActivoProvider } from "./ComponenteActivoProvider";


/*El objetivo de nueva entidad wrapper es que cuando hagas click en el botón de 
nuevo conocimiento o nueva experiencia el botón se cambie por el formulario 
de dicho conocimiento o experiencia, además de volver a cambiarse al subir
la nueva entidad o al cancelarse*/
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
