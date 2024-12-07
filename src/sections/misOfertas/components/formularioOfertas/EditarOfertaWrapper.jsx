import { FormularioOferta } from "./FormularioOferta";


export const EditarOfertaForm = () => {
  
    const id = parseInt(location.pathname.substring(22));
   
    return <FormularioOferta id={id}/>
}
