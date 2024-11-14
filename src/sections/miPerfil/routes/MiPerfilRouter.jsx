import { Route, Routes } from 'react-router'
import { LogueadoVerificacion } from './LogueadoVerificacion.jsx';
import { MisDatosPage } from '../pages/MisDatosPage.jsx';

export const MiPerfilRouter = () => {
  return (
    <LogueadoVerificacion>
      <Routes>
          <Route path='/' element={<MisDatosPage/>}/>
      </Routes>
    </LogueadoVerificacion>
  )
}
