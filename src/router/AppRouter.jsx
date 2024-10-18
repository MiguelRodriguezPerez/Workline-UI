import { Route, Routes } from "react-router"
import { HomePage } from "../home/pages/HomePage"

export const AppRouter = () => {
  return (
      <Routes>
        <Route path='/' element={<HomePage/>}/>
      </Routes>
  )
}


