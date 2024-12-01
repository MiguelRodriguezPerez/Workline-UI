import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../global/context/AuthContext';
import { useContext } from 'react';

import '../../styles/general/miPerfilSideNav.css';

export const MiPerfilSideNav = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    /*Link no ocupaba todo el li, de manera que si no pulsabas en el texto, no te llevaba
    a la ruta deseada*/
    return (
        <ul className='lista-opciones'>
            <li onClick={() => navigate('/miPerfil/misDatos')}>Mis datos</li>
            { user?.rol === 'BUSCA' && (
                <>
                    <li onClick={() => navigate('/miPerfil/misConocimientos')}>Mis conocimientos</li>
                    <li onClick={() => navigate('/miPerfil/misExperiencias')}>Mis experiencias</li>
                    <li onClick={() => navigate('/miPerfil/misInscripciones')}>Mis ofertas</li>
                </>
            )}
        </ul>
    );
};
