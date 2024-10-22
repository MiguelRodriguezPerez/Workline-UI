import { Route, Routes } from "react-router"
import { HomePage } from "../sections/home/pages/HomePage"
import { JobPage } from "../sections/jobs/pages/JobPage"

export const AppRouter = () => {
  return (
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path="/ofertasDeTrabajo/:page" element={<JobPage/>}/>
      </Routes>
  )
}


