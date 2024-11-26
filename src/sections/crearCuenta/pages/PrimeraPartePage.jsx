import { NuevoUsuarioTitular, NuevoUsuarioSubtitular } from "../components"
import { PrimerFormularioNuevoUsuario } from "../components/PrimerFormularioNuevoUsuario"

export const PrimeraPartePage = () => {

    return (
        <>
            <NuevoUsuarioTitular texto={'Bienvenido a Workline'}/>
            <NuevoUsuarioSubtitular texto={'Crea una cuenta en unos segundos'}/>
            <PrimerFormularioNuevoUsuario/>
        </>
    )
}
