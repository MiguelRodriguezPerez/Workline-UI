import { useContext } from 'react'
import '../styles/barraLateral.css'
import { AuthContext } from '../../../global/context/AuthContext'


export const BarraLateral = () => {

    const { user } = useContext(AuthContext);

    return (
        <aside className="barra-lateral">
            <ul>
                <li>Mis Datos</li>
                {
                    user?.rol === 'BUSCA' &&
                    <>
                        <li>Mis conocimientos</li>
                        <li>Mis experiencias </li>
                        <li>Mis ofertas</li>
                    </>
                }
            </ul>
        </aside>
    )
}
