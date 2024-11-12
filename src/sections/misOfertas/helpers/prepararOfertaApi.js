export const prepararOfertaApi = (oferta = {}) => {
    
    /*Esta función sirve para garantizar el orden de los campos cuando ofertaPreparada 
    se envíe al endpoint de la api que deba guardarla. 
    Si no se asegura el orden correcto de los campos, el endopoint rechazará la solicitud */

    const ofertaPreparada = {
        puesto : oferta.puesto,
        sector: oferta.sector,
        descripcion: oferta.descripcion,
        ciudad: oferta.ciudad,
        salarioAnual: oferta.salarioAnual,
        tipoContrato: oferta.tipoContrato,
        horas: oferta.horas,
        modalidadTrabajo: oferta.modalidadTrabajo
    }

    return ofertaPreparada;
}