import { useContext, useEffect, useState } from "react";
import { JobOfferContext } from "../context/jobOffer/jobOfferContext";
import { comprobarInscripcionOferta, desinscribirBusca, inscribirBusca } from "../api";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

export const useButtonInscribe = () => {

    const user = useSelector(state => state.loggedUser);
    const [ estaInscrito, setEstaInscrito ] = useState(false);
    const [ isLoading, setIsLoading ] = useState(true);
    const oferta  = useContext(JobOfferContext);
    const navigate = useNavigate();

    useEffect(() => {
        const effectWrapper = async () => {
            if (oferta && oferta.id) {
                const resultadoPeticion = await comprobarInscripcionOferta(oferta.id);
                setEstaInscrito(resultadoPeticion.data);
                setIsLoading(false);
            }
            setIsLoading(false)
        }

        effectWrapper();
    }, [oferta]);

    const inscribeEvent = async () => {
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

    return {
        isLoading,
        estaInscrito,
        inscribeEvent
    }
}