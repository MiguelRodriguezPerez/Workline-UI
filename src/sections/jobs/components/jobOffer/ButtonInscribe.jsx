import { useContext, useEffect, useState } from "react"
import { AuthContext } from "/src/global/context"
import { JobProvider } from "../../context/jobPage/JobProvider"
import { comprobarInscripcion, inscribirBusca, desinscribirBusca } from "../../api";
import { useNavigate } from "react-router";

import '/src/global/styles/elementos.css'


export const ButtonInscribe = () => {

    const navigate = useNavigate();
    const { oferta : id } = useContext(JobProvider);
    const { user : rol } = useContext(AuthContext);

    const [ usuarioEsBusca, setUsuarioEsBusca ] = useState( rol === 'BUSCA' );
    const [ estaInscrito, setEstaInscrito ] = useState(false);

    const effectWrapper = async() => {
        if( usuarioEsBusca ) {
            /*No tiene sentido realizar la petición si el usuario logueado no es de tipo BUSCA*/
            const resultadoPeticion = await comprobarInscripcion(id);
            setEstaInscrito(resultadoPeticion);
        }
        else setEstaInscrito(false);
    }

    useEffect(() => {
      effectWrapper();
    }, []);

    const buttonEvent = async() => {
        switch(usuarioEsBusca) {
            case true:
                if(estaInscrito) {
                    const resultado = await desinscribirBusca(id);
                    if(resultado.status === 204) setEstaInscrito(false);
                }
                else {
                    const resultado = await inscribirBusca(id);
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
