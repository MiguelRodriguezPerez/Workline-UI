import { useNavigate } from "react-router";

import '../styles/homeActionCall.css';

export const EncontrarTrabajoActionCall = () => {

    const navigate = useNavigate();

    const redirect = () => {
        navigate('/ofertasDeTrabajo/?numPag=0');
    }

  return (
    <div onClick={redirect} className="action-call">
        <img src='/images/home/jobAction.png' alt="jobAction.png" />
        <div>
        <h3>Encuentra tu próximo trabajo</h3>
        <p>Descubre tu trabajo ideal en Workline con nuestro buscador de trabajo</p>
    </div>
    </div>
  )
}

