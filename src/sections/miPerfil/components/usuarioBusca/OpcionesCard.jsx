import '../../styles/seccionBusca/opcionesCard.css'


export const OpcionesCard = ({activarEdicion, borrarEntidad}) => {

  //WARNING: borrarEntidad refresca la página

  return (
    <div className='opciones-card'>
        <img src="/images/miPerfil/seccionBusca/editar.png" alt="editar" onClick={activarEdicion}/>
        <img src="/images/miPerfil/seccionBusca/borrar.png" alt="borrar" onClick={borrarEntidad}/>
    </div>
  )
}
