import { WkHeaderWrapper } from "../../../ui/components"
import { WkFooter } from "../../../ui/components/WkFooter"
import { BarraLateral, CabeceraMiPerfil, FormularioDatosUsuario } from "../components"

import '../styles/misDatosPage.css'

export const MisDatosPage = () => {
  return (
    <>
        <WkHeaderWrapper/>
            <main className="mi-perfil-content">
                <BarraLateral/>
                <FormularioDatosUsuario/>
            </main>
        <WkFooter/>
    </>
  )
}
