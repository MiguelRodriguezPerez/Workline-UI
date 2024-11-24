import { CandidateHeading, CandidateGridContainer } from '../components/misOfertas/pageCandidateRelated';
import { VerCandidatoProvider } from '../context/verCandidato/VerCandidatoProvider';
import { WkFooter, WkHeaderWrapper } from '/src/ui/components';

export const VerCandidatoPage = () => {

    return (
        <>
            <WkHeaderWrapper/>
            <VerCandidatoProvider>
                <CandidateHeading/>
                <CandidateGridContainer/>
            </VerCandidatoProvider>
            <WkFooter/>
        </>
    )
}
