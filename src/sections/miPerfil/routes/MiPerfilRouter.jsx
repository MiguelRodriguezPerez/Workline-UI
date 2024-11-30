import { Route, Routes } from 'react-router'
import { LogueadoVerificacion } from './LogueadoVerificacion.jsx';
import { CambiarPasswordFirstPage } from '../pages';
import { MisDatosPage } from '../pages/general/MisDatosPage.jsx';
import { MisConocimientosPage, MisExperienciasPage, MisInscripcionesPage } from '../pages/seccionBusca';



export const MiPerfilRouter = () => {
  return (
    <LogueadoVerificacion>
      <Routes>
          <Route path='/misDatos' element={<MisDatosPage/>}/>
          <Route path='/confirmarPassword' element={<CambiarPasswordFirstPage/>}/>
          {/* Pendiente HOC verificar rol busca */}
          <Route path='/misConocimientos' element={<MisConocimientosPage/>}/>
          <Route path='/misExperiencias' element={<MisExperienciasPage/>}/>
          <Route path='/misInscripciones' element={<MisInscripcionesPage/>}/>
      </Routes>
    </LogueadoVerificacion>
  )
}
