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
        /*No tiene sentido realizar la petición si el usuario logueado no es de tipo BUSCA*/
        const resultadoPeticion = await comprobarInscripcionOferta(oferta.id);
        setEstaInscrito(resultadoPeticion.data);
        console.log(resultadoPeticion.data)
    }

    useEffect(() => {
        /*No tengo ni la mas remota idea de porque estaba llamando a la función del wrapper
        con una oferta nula. Imagino que useContext se comporta de manera asíncrona
        
        En cualquier caso, como se estaba llamando a la función sin un id de oferta, lo que
        hice fue obligar a que oferta tuviera un id definido antes de llamar a la función del efecto*/
        effectWrapper();
    }, [oferta]);

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

    return (
        <button onClick={buttonEvent} className={ estaInscrito ? 'red-button' : 'green-button'}>
            {
                estaInscrito ? 'Desinscribirse' : 'Inscribirse'
            }
        </button>
    )
}
