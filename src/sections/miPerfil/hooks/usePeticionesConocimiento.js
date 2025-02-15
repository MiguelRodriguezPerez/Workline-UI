import { borrarConocimiento, editarConocimiento } from "../../../global/api/seccionBusca/conocimiento";
import { convertirFechaServer } from "../../../global/helpers/fechas";
import { prepararConocimientoDto } from "../helpers/prepararConocimientoDto";

/*No recibes los datos del formulario al llamar al hook porque si no tendrías que hacer cosas extrañas
para actualizar los datos del formulario. En su lugar, recibes el id de data para que desactivarEdicionCard
pueda funcionar. Solo recibes los datos del formulario cuando vayas a editar la entidad

refreshData es el callback que actualiza el estado de la lista de conocimientos. Lo necesitas
en todas las funciones*/

export const usePeticionesConocimiento = (id, refreshData = () => {}) => {

  const editarConocimientoSubmit = async(newData) => {
    newData.inicioPeriodoConocimiento = convertirFechaServer(newData.inicioPeriodoConocimiento);
    newData.finPeriodoConocimiento = convertirFechaServer(newData.finPeriodoConocimiento);

    const conocimientoDto = prepararConocimientoDto(newData);
    const resultado = await editarConocimiento(conocimientoDto, newData.id);

    if (resultado.status === 201) refreshData();
  }

  const borrarConocimientoSubmit = async() => {
    const resultado = await borrarConocimiento(id);
    if(resultado.status === 204) refreshData();
  }

  return {
    editarConocimientoSubmit,
    borrarConocimientoSubmit
  }
}