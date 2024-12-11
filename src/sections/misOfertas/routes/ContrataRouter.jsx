import { Route, Routes } from "react-router"
import { MisOfertasPage, NuevaOfertaPage, VerOfertaPage, VerCandidatoPage} from '../pages/index'
import { ContrataRolVerificacion } from "./ContrataRolVerification"
import { Page404 } from "../../../errors/pages"


export const ContrataRouter = () => {
  return (
    <>
        <ContrataRolVerificacion>
            <Routes>
                <Route path="/:numPag" element={<MisOfertasPage/>}/>
                <Route path="/nuevaOferta" element={<NuevaOfertaPage/>}/>
                <Route path="/verOferta/:id" element={<VerOfertaPage/>}/>
                <Route path="/verCandidato/:nombre" element={<VerCandidatoPage/>}/>
                <Route path="/*" element={ <Page404/> }/>
            </Routes>
        </ContrataRolVerificacion>
    </>
  )
}
