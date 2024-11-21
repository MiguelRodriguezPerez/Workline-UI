import { useEffect, useState } from "react"
import { obtenerTiposContrato } from '/src/sections/jobs/api'

export const useTiposContrato = () => {

    const [tiposContrato, setTiposContrato] = useState([]);

    useEffect( () => {
        const fetchTipos = async() => {
            const resultado = await obtenerTiposContrato();
            setTiposContrato(resultado.data);
        }
        fetchTipos();
    }, []);

    return { tiposContrato: tiposContrato }
}