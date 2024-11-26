import { Route, Routes } from "react-router"
import { CrearCuentaRouter } from "../sections/crearCuenta/router/CrearCuentaRouter"
import { HomePage } from "../sections/home/pages/HomePage"
import { JobRouter } from "../sections/jobs/router/JobRouter"
import { LoginRouter } from "../sections/login/router/LoginRouter"
import { MiPerfilRouter } from "../sections/miPerfil/routes/MiPerfilRouter"
import { ContrataRouter } from "../sections/misOfertas/routes/ContrataRouter"

export const AppRouter = () => {
  return (
      <Routes>
        <Route path='/' element={ <HomePage/> }/>
        <Route path="/ofertasDeTrabajo/*" element={ <JobRouter/> }/>
        <Route path="/login/*" element={ <LoginRouter/>}/>
        <Route path="/misOfertas/*" element={ <ContrataRouter/>}/>
        <Route path="/miPerfil/*" element={ <MiPerfilRouter/>}/>
        <Route path="/nuevaCuenta/*" element= { <CrearCuentaRouter/>}/>
      </Routes>
  )
}


