import { WkHeaderWrapper } from "../../../ui/components"
import { WkFooter } from "../../../ui/components/WkFooter"
import { BarraLateral, CabeceraMiPerfil, FormularioDatos } from "../components"

import '../styles/misDatosPage.css'



export const MisDatosPage = () => {
  return (
    <>
        <WkHeaderWrapper/>
            <main className="mi-perfil-content">
                <BarraLateral/>
                <FormularioDatos/>
            </main>
        <WkFooter/>
    </>
  )
}
