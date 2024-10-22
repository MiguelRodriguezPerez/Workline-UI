import { useEffect, useState } from "react";
import { getModalidades } from "../helpers/getModalidades";

export const useModalidades = () => {
    const [modalidades,setModalidades] = useState([]);

    useEffect( () =>{
        const fetchModalidades = async() => {
            const resultado = await getModalidades();
            setModalidades(resultado);
        }
        fetchModalidades();
        
    }, []);
    /*NO PONGAS DEPENDENCIA AQUÍ. PARECE QUE VA BIEN PERO EL SERVIDOR SE ACUERDA DE TODO */

    return{
        modalidades: modalidades,
    }
}