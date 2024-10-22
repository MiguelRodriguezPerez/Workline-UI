import { useState } from "react"

export const jobsProvider = ({ children }) => {

    const [jobPageState, setJobPageState ] = useState({
        busquedaOferta: '',
        numeroPaginas: 0,
        numeroOfertas: 0,
    })
}