import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { comprobarInscripcionOferta, desinscribirBusca, inscribirBusca } from "../../api";
import { AuthContext } from "/src/global/context";
import { JobOfferContext } from "../../context/jobOffer/jobOfferContext";

import '/src/global/styles/elementos.css';

export const ButtonInscribe = () => {
    const navigate = useNavigate();
    const oferta  = useContext(JobOfferContext);
    const { user } = useContext(AuthContext);
    const [ estaInscrito, setEstaInscrito ] = useState(false);
    const [ isLoading, setIsLoading ] = useState(true);

    const effectWrapper = async () => {
        if (oferta && oferta.id) {
            const resultadoPeticion = await comprobarInscripcionOferta(oferta.id);
            setEstaInscrito(resultadoPeticion.data);
            setIsLoading(false);
        }
        setIsLoading(false)
    }

    useEffect(() => {
        effectWrapper();
    }, [oferta]);

    const buttonEvent = async () => {
        setIsLoading(true);
        switch (user.rol === 'BUSCA') {
            case true:
                if (estaInscrito) {
                    const resultado = await desinscribirBusca(oferta.id);
                    if (resultado.status === 204) setEstaInscrito(false);
                } else {
                    const resultado = await inscribirBusca(oferta.id);
                    if (resultado.status === 201) setEstaInscrito(true);
                }
                break;
            case false:
                navigate('/login/');
                break;
        }
        setIsLoading(false);
    }


    if (!isLoading) return (
        <button onClick={buttonEvent} className={estaInscrito ? 'red-button' : 'green-button'}>
            {estaInscrito ? 'Desinscribirse' : 'Inscribirse'}
        </button>
    );
}
