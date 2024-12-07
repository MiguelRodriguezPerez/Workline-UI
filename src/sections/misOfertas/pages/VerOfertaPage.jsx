import { WkFooter } from '../../../ui/components/WkFooter'
import { WkHeaderWrapper } from '../../../ui/components/WkHeaderWrapper'
import { CandidateGrid } from '../components/misOfertas/candidateRelated/CandidateGrid'
import { EditarOfertaForm } from '../components/formularioOfertas/EditarOfertaWrapper'


export const VerOfertaPage = () => {

  return (
    <>
      <WkHeaderWrapper />
      <EditarOfertaForm />
      <CandidateGrid />
      <WkFooter />
    </>
  )
}
