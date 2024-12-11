import { Route, Routes } from "react-router"
import { PrimeraPartePage, SegundaPartePage } from "../pages"
import { Page404 } from "../../../errors/pages"

export const CrearCuentaRouter = () => {
  return (
    <Routes>
        <Route path="/primeraParte" element={<PrimeraPartePage/>}/>
        <Route path="/segundaParte" element={<SegundaPartePage/>}/>
        <Route path="/*" element={ <Page404/> }/>
    </Routes>
  )
}
