import { borrarExperiencia, editarExperiencia } from "../../../global/api/seccionBusca/experiencia";
import { convertirFechaServer } from "../../../global/helpers/fechas";
import { prepararExperienciaDto } from "../helpers";
import { useCardEditOptions } from "./useCardEditOptions";

/*No recibes los datos del formulario al llamar al hook porque si no tendrías que hacer cosas extrañas
para actualizar los datos del formulario. En su lugar, recibes el id de data para que desactivarEdicionCard
pueda funcionar. Solo recibes los datos del formulario cuando vayas a editar la entidad

refreshData es el callback que actualiza el estado de la lista de experiencias. Lo necesitas
en todas las funciones*/

export const usePeticionesExperiencia = (id, refreshData = () => {}) => {

    const { desactivarEdicionCard } = useCardEditOptions(id);

    const editarExperienciaSubmit = async(newData) => {
        newData.inicioExperiencia = convertirFechaServer(newData.inicioExperiencia);
        newData.finExperiencia = convertirFechaServer(newData.finExperiencia);

        const experienciaDto = prepararExperienciaDto(newData);
        const resultado = await editarExperiencia(experienciaDto, newData.id);
    
        if (resultado.status === 201) {
          refreshData();
          desactivarEdicionCard();
        }
    }

    const borrarExperienciaSubmit = async() => {
        const resultado = await borrarExperiencia(id);
        if(resultado.status === 204) refreshData();
    }

    return {
        editarExperienciaSubmit,
        borrarExperienciaSubmit
    }
}