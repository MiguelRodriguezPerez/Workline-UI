import { useNavigate } from "react-router"

import '../../styles/jobOffer/jobButtonBack.css'

export const JobButtonBack = () => {

    const navigate = useNavigate();
    return (
        <button onClick={() => navigate(-1) } className="button-back">
            <img src="/images/jobs/atras.png" alt="back" /> 
        </button>
    )
}
