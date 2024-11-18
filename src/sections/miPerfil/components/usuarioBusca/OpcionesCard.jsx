import '../../styles/seccionBusca/opcionesCard.css'


export const OpcionesCard = ({turnOnReadOnly}) => {


  return (
    <div className='opciones-card'>
        <img src="/images/miPerfil/seccionBusca/editar.png" alt="editar" onClick={turnOnReadOnly}/>
        <img src="/images/miPerfil/seccionBusca/borrar.png" alt="borrar" />
    </div>
  )
}
