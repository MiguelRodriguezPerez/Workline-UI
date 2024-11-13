import { Route, Routes } from "react-router"
import { MisOfertasPage, NuevaOfertaPage, EditarOfertaPage, VerOfertaPage} from '../pages/index'
import { ContrataRolVerificacion } from "./ContrataRolVerification"


export const ContrataRouter = () => {
  return (
    <>
        <ContrataRolVerificacion>
            <Routes>
                <Route path="/" element={<MisOfertasPage/>}/>
                <Route path="/nuevaOferta" element={<NuevaOfertaPage/>}/>
                <Route path="/editarOferta/:id" element={<EditarOfertaPage/>}/>
                <Route path="/verOferta/:id" element={<VerOfertaPage/>}/>
            </Routes>
        </ContrataRolVerificacion>
    </>
  )
}
