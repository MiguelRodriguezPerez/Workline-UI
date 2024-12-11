import { Route, Routes } from 'react-router'
import { LogueadoVerificacion } from './LogueadoVerificacion.jsx';
import { CambiarPasswordFirstPage, CambiarPasswordSecondPage } from '../pages';
import { MisDatosPage } from '../pages/general/MisDatosPage.jsx';
import { MisConocimientosPage, MisExperienciasPage, MisInscripcionesPage } from '../pages/seccionBusca';
import { Page404 } from '../../../errors/pages/Page404.jsx';



export const MiPerfilRouter = () => {
  return (
    <LogueadoVerificacion>
      <Routes>
          <Route path='/misDatos' element={<MisDatosPage/>}/>
          <Route path='/confirmarPassword' element={<CambiarPasswordFirstPage/>}/>
          <Route path='/cambiarPassword' element={<CambiarPasswordSecondPage/>}/>
          {/* Pendiente HOC verificar rol busca */}
          <Route path='/misConocimientos' element={<MisConocimientosPage/>}/>
          <Route path='/misExperiencias' element={<MisExperienciasPage/>}/>
          <Route path='/misInscripciones' element={<MisInscripcionesPage/>}/>
          <Route path="/*" element={ <Page404/> }/>
      </Routes>
    </LogueadoVerificacion>
  )
}
