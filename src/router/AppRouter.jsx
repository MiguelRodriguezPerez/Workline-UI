import { Route, Routes } from "react-router"
import { HomePage } from "../sections/home/pages/HomePage"
import { JobPage } from "../sections/jobs/pages/JobPage"
import { JobRouter } from "../sections/jobs/router/JobRouter"
import { LoginRouter } from "../sections/login/router/LoginRouter"

export const AppRouter = () => {
  return (
      <Routes>
        <Route path='/' element={ <HomePage/> }/>
        <Route path="/ofertasDeTrabajo/*" element={ <JobRouter/> }/>
        <Route path="/login/*" element={ <LoginRouter/>}/>
      </Routes>
  )
}


