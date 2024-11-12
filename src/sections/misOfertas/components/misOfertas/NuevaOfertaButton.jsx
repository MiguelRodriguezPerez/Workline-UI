import { useNavigate } from 'react-router';
import '../../styles/nuevaOfertaButton.css';

export const NuevaOfertaButton = () => {

    const navigate = useNavigate();

    const redirect = () => {
        navigate('/misOfertas/nuevaOferta');
    }

    return (
        <button className='new-offer' onClick={redirect}>Nueva oferta</button>
    )
}
