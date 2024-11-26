import '../styles/nuevoUsuarioTitulares.css'

export const NuevoUsuarioTitular = ({ texto = ''}) => {
  return (
    <h1 className='nuevo-usuario-titular'>{texto}</h1>
  )
}
