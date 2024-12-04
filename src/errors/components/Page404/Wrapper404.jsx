import { useNavigate } from "react-router"

import '../../styles/wrapper404.css'
import '/src/global/styles/elementos.css'

export const Wrapper404 = () => {

    const navigate = useNavigate();

    return (
        <main className="wrapper-404">
            <img src='/images/errors/404hd.png' alt='error-404'></img>
            <h1>¡Vaya! Parece que la página que buscas no existe</h1>
            <button onClick={navigate('/')} className="green-button">Volver al inicio</button>
        </main>
    )
}
