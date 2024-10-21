import { useNavigate } from "react-router";
import '../styles/homeActionCall.css';

export const HomeActionCall = ({url}) => {

    const navigate = useNavigate();

    const redirect = () => {
        navigate(url);
    }

  return (
    <div onClick={redirect} className="action-call">
        <img src={url.includes('ofertas') ? '/images/home/jobAction.png' : '/images/home/talentAction.png'} alt="image" />
        {
            url.includes('ofertas') ? 
                <div>
                    <h3>Encuentra tu próximo trabajo</h3>
                    <p>Descubre tu trabajo ideal en Workline con nuestro buscador de trabajo</p>
                </div>
            :
                <div>
                    <h3>Contrata empleados</h3>
                    <p>Encuentra el talento que necesita tu empresa con nuestra ayuda</p>
                </div>
        }
    </div>
  )
}

