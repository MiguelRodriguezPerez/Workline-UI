import { Route, Routes } from 'react-router'
import { LogueadoVerificacion } from './LogueadoVerificacion.jsx';
import { MisDatosPage, CambiarPasswordFirstPage } from '../pages';

export const MiPerfilRouter = () => {
  return (
    <LogueadoVerificacion>
      <Routes>
          <Route path='/' element={<MisDatosPage/>}/>
          <Route path='/confirmarPassword' element={<CambiarPasswordFirstPage/>}/>
      </Routes>
    </LogueadoVerificacion>
  )
}
