import { WkHeaderWrapper } from '../../../ui/components/WkHeaderWrapper'
import { WkFooter } from '../../../ui/components/WkFooter'
import { OfertaForm } from '../components/nuevaOferta/OfertaForm'
import { prepararOfertaApi } from '../helpers/prepararOfertaApi'
import { publicarNuevaOferta } from '../api/publicarNuevaOferta'
import { useNavigate } from 'react-router'

export const NuevaOfertaPage = () => {

  const navigate = useNavigate();
    const gestionarSubmit = async (data) => {
      const ofertaPreparada = prepararOfertaApi(data);
      const resultado = await publicarNuevaOferta(ofertaPreparada);
      if(resultado.status === 201) navigate('/misOfertas/')
  }

  return (
    <>
        <WkHeaderWrapper/>
        <OfertaForm gestionarSubmit={gestionarSubmit}/>
        <WkFooter/>
    </>
  )
}
