import { convertirFechaServer } from "./convertirFechaServer";

export const compararFechas = (fechaAnterior, fechaPosterior) => {
    return (new Date(convertirFechaServer(fechaAnterior)) < new Date(convertirFechaServer(fechaPosterior)));
}