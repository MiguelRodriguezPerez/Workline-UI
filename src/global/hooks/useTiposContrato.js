import { useEffect, useState } from "react"
import { getTiposContrato } from "../../sections/jobs/helpers/getTiposContrato";

export const useTiposContrato = () => {

    const [tiposContrato, setTiposContrato] = useState([]);

    useEffect( () => {
        const fetchTipos = async() => {
            const resultado = await getTiposContrato();
            setTiposContrato(resultado);
        }
        fetchTipos();
    }, []);

    return { tiposContrato: tiposContrato }
}