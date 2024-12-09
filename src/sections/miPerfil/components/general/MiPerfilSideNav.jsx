import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../global/context/AuthContext';
import { useContext } from 'react';

import '../../styles/general/miPerfilSideNav.css';

export const MiPerfilSideNav = ({ closeMenu }) => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    return (
        <ul className='lista-opciones'>
            <li onClick={() => { navigate('/miPerfil/misDatos'); closeMenu(); }}>Mis datos</li>
            {user?.rol === 'BUSCA' && (
                <>
                    <li onClick={() => { navigate('/miPerfil/misConocimientos'); closeMenu(); }}>Mis conocimientos</li>
                    <li onClick={() => { navigate('/miPerfil/misExperiencias'); closeMenu(); }}>Mis experiencias</li>
                    <li onClick={() => { navigate('/miPerfil/misInscripciones'); closeMenu(); }}>Mis ofertas</li>
                </>
            )}
        </ul>
    );
};
