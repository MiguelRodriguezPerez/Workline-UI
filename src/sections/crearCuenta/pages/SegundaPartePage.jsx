import { NuevoUsuarioTitular, NuevoUsuarioSubtitular } from '../components'
import { SegundoFormularioNuevoUsuario } from '../components/SegundoFormularioNuevoUsuario'

export const SegundaPartePage = () => {
  return (
    <>
        <NuevoUsuarioTitular texto={'Cuentanos un poco sobre ti'}/>
        <NuevoUsuarioSubtitular texto={'¿Que conocimientos y experiencias tienes?'}/>
        <SegundoFormularioNuevoUsuario/>
    </>
  )
}
