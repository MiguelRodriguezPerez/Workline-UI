import { useEffect, useState } from "react"
import { getTiposContrato } from "../helpers/getTiposContrato";

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