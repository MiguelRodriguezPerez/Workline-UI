import { useNavigate } from "react-router";

import '../styles/homeActionCall.css';

export const ContrataActionCall = () => {

    const navigate = useNavigate();

    const redirect = () => {
        navigate('/misOfertas/0');
    }

  return (
    <div onClick={redirect} className="action-call">
        <img src='/images/home/talentAction.png' alt="talentAction.png" />
        <div>
            <h3>Contrata empleados</h3>
            <p>Encuentra el talento que necesita tu empresa con nuestra ayuda</p>
        </div>
    </div>
  )
}

