import { Route, Routes } from "react-router"
import { MisOfertasPage, NuevaOfertaPage, VerOfertaPage, VerCandidatoPage} from '../pages/index'
import { ContrataRolVerificacion } from "./ContrataRolVerification"


export const ContrataRouter = () => {
  return (
    <>
        <ContrataRolVerificacion>
            <Routes>
                <Route path="/" element={<MisOfertasPage/>}/>
                <Route path="/nuevaOferta" element={<NuevaOfertaPage/>}/>
                <Route path="/verOferta/:id" element={<VerOfertaPage/>}/>
                <Route path="/verCandidato/:nombre" element={<VerCandidatoPage/>}/>
            </Routes>
        </ContrataRolVerificacion>
    </>
  )
}
