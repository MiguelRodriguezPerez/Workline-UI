import { useNavigate } from 'react-router';

import '../../../styles/seccionBusca/noEntitiesFound.css'
import '/src/global/styles/elementos.css'

export const NoOfertasInscrito = () => {

    const navigate = useNavigate();

    return (
        <section className="no-entities-found">
            <img src="/images/miPerfil/seccionBusca/noJobsInscribed.png" alt="noJobsInscribed.png"/>
            <div>
                <h2>No tienes ofertas registradas</h2>
                <p>Busca ofertas y encuentra oportunidades en nuestra aplicación</p>
                <button className='green-button' 
                    onClick={() => navigate('/ofertasDeTrabajo/?numberPage=0')}>Buscar trabajo</button>
            </div>
        </section>
    );
}
