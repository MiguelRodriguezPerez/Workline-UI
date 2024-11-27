import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { comprobarInscripcionOferta, desinscribirBusca, inscribirBusca } from "../../api";
import { AuthContext } from "/src/global/context";

import { JobOfferContext } from "../../context/jobOffer/jobOfferContext";
import '/src/global/styles/elementos.css';


export const ButtonInscribe = () => {

    const navigate = useNavigate();
    const oferta  = useContext( JobOfferContext );
    const { user } = useContext(AuthContext);
    const [ estaInscrito, setEstaInscrito ] = useState(false);

    const effectWrapper = async() => {
        if( user.rol === 'BUSCA' ) {
            /*No tiene sentido realizar la petición si el usuario logueado no es de tipo BUSCA*/
            const resultadoPeticion = await comprobarInscripcionOferta(oferta.id);
            console.log(resultadoPeticion)
            setEstaInscrito(resultadoPeticion);
        }
        else setEstaInscrito(false);
    }

    const buttonEvent = async() => {
        switch(user.rol === 'BUSCA') {
            case true:
                if(estaInscrito) {
                    const resultado = await desinscribirBusca(oferta.id);
                    if(resultado.status === 204) setEstaInscrito(false);
                }
                else {
                    const resultado = await inscribirBusca(oferta.id);
                    if(resultado.status === 201) setEstaInscrito(true);
                }
            break;
            case false:
                navigate('/login/');
            break;
        }
    }

    useEffect(() => {
        effectWrapper();
    }, [user,oferta]);

    

    return (
        <button onClick={buttonEvent} className={ estaInscrito ? 'red-button' : 'green-button'}>
            {
                estaInscrito ? 'Desinscribirse' : 'Inscribirse'
            }
        </button>
    )
}
