import React from 'react'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom';

export const UnloggedContainer = () => {

    const navigate = useNavigate();

    return (
        <>
            <Link to={'/login'}>Iniciar sesión</Link>
            <img src="/images/ui/userLogin.png" onClick={() => { navigate('/') }} />
        </>
    )
}
