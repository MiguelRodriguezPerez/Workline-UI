
import '../../../styles/candidateCounter.css';

export const CandidateCounter = ({num}) => {


  return (
    <div className="candidate-counter">
        {
            num > 0 &&
            <>
                <h4>{num}</h4>
                <img src="/images/seccionContrata/candidato.png" alt="candidato.png" />
            </>
        }
    </div>
  )
}
