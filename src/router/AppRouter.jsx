import { Route, Routes } from "react-router"
import { HomePage } from "../sections/home/pages/HomePage"
import { JobPage } from "../sections/jobs/pages/JobPage"
import { JobRouter } from "../sections/jobs/router/JobRouter"

export const AppRouter = () => {
  return (
      <Routes>
        <Route path='/' element={ <HomePage/> }/>
        <Route path="/ofertasDeTrabajo/*" element={ <JobRouter/> }/>
      </Routes>
  )
}


