import { Route, Routes } from "react-router"
import { HomePage } from "../home/pages/HomePage"
import { JobPage } from "../jobs/pages/JobPage"

export const AppRouter = () => {
  return (
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path="/ofertasDeTrabajo/0" element={<JobPage/>}/>
      </Routes>
  )
}


