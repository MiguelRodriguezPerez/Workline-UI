export const prepararConocimientoDto = (conocimiento) => {
    const conocimientoDto = {
        centroEducativo : conocimiento.centroEducativo,
        titulo : conocimiento.titulo,
        inicioPeriodoConocimiento : conocimiento.inicioPeriodoConocimiento,
        finPeriodoConocimiento : conocimiento.finPeriodoConocimiento
    }

    return conocimientoDto;
}