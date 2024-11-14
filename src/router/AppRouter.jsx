import { Route, Routes } from "react-router"
import { HomePage } from "../sections/home/pages/HomePage"
import { JobPage } from "../sections/jobs/pages/JobPage"
import { JobRouter } from "../sections/jobs/router/JobRouter"
import { LoginRouter } from "../sections/login/router/LoginRouter"
import { ContrataRouter } from "../sections/misOfertas/routes/ContrataRouter"
import { MiPerfilRouter } from "../sections/miPerfil/routes/MiPerfilRouter"

export const AppRouter = () => {
  return (
      <Routes>
        <Route path='/' element={ <HomePage/> }/>
        <Route path="/ofertasDeTrabajo/*" element={ <JobRouter/> }/>
        <Route path="/login/*" element={ <LoginRouter/>}/>
        <Route path="/misOfertas/*" element={ <ContrataRouter/>}/>
        <Route path="/miPerfil/*" element={ <MiPerfilRouter/>}/>
      </Routes>
  )
}


