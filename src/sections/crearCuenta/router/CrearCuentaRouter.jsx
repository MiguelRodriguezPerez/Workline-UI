import { Route, Routes } from "react-router"
import { PrimeraPartePage, SegundaPartePage } from "../pages"

export const CrearCuentaRouter = () => {
  return (
    <Routes>
        <Route path="/primeraParte" element={<PrimeraPartePage/>}/>
        <Route path="/segundaParte" element={<SegundaPartePage/>}/>
    </Routes>
  )
}
