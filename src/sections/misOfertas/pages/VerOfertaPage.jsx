import { WkFooter } from '../../../ui/components/WkFooter'
import { WkHeaderWrapper } from '../../../ui/components/WkHeaderWrapper'
import { EditarOfertaForm } from '../components/nuevaOferta/EditarOfertaForm'

export const VerOfertaPage = () => {

    const id = parseInt(location.pathname.substring(22));

  return (
    <>
        <WkHeaderWrapper/>
        <EditarOfertaForm id={id} isReadOnly={true}/>
        <WkFooter/>
    </>
  )
}
