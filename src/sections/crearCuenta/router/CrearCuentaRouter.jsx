import { Route, Routes } from "react-router"
import { PrimeraPartePage } from "../pages"

export const CrearCuentaRouter = () => {
  return (
    <Routes>
        <Route path="/primeraParte" element={<PrimeraPartePage/>}/>
    </Routes>
  )
}
