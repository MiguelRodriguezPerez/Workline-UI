import '../styles/nuevoUsuarioTitulares.css'

export const NuevoUsuarioSubtitular = ({ texto = ''}) => {
  return (
    <h2 className="nuevo-usuario-subtitular">{texto}</h2>
  )
}
