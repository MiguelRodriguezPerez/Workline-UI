import { Route, Routes } from "react-router"
import { ContrataRolVerificacion } from "./ContrataRolVerification"
import { MisOfertasPage } from "../pages/MisOfertasPage"
import { OfertaForm } from "../components/nuevaOferta/OfertaForm"
import { NuevaOfertaPage } from "../pages/NuevaOfertaPage"


export const ContrataRouter = () => {
  return (
    <>
        <ContrataRolVerificacion>
            <Routes>
                <Route path="/" element={<MisOfertasPage/>}/>
                <Route path="/nuevaOferta" element={<NuevaOfertaPage/>}/>
            </Routes>
        </ContrataRolVerificacion>
    </>
  )
}
