import { WkFooter } from '../../../ui/components/WkFooter'
import { WkHeaderWrapper } from '../../../ui/components/WkHeaderWrapper'
import { CandidateGrid } from '../components/nuevaOferta/candidateRelated/CandidateGrid'
import { EditarOfertaForm } from '../components/nuevaOferta/EditarOfertaForm'
import { VerOfertaProvider } from '../context/VerOfertaProvider'

export const VerOfertaPage = () => {

  return (
    <>
        <WkHeaderWrapper/>
        <VerOfertaProvider>
          <EditarOfertaForm/>
          <CandidateGrid/>
        </VerOfertaProvider>
        <WkFooter/>
    </>
  )
}
