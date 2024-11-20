import { useEffect, useState } from "react";
import { obtenerModalidades } from '/src/sections/jobs/api'

export const useModalidades = () => {
    const [modalidades,setModalidades] = useState([]);

    useEffect( () =>{
        const fetchModalidades = async() => {
            const resultado = await obtenerModalidades();
            setModalidades(resultado.data);
        }
        fetchModalidades();
        
    }, []);
    /*NO PONGAS DEPENDENCIA AQUÍ. PARECE QUE VA BIEN PERO EL SERVIDOR SE ACUERDA DE TODO */

    return {
        modalidades: modalidades,
    }
}