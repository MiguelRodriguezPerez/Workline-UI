import { Route, Routes } from "react-router"
import { ContrataRolVerificacion } from "./ContrataRolVerification"
import { MisOfertasPage } from "../pages/MisOfertasPage"


export const ContrataRouter = () => {
  return (
    <>
        <ContrataRolVerificacion>
            <Routes>
                <Route path="/" element={<MisOfertasPage/>}/>
            </Routes>
        </ContrataRolVerificacion>
    </>
  )
}
