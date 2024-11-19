export const prepararExperienciaDto = (exp = {}) => {
    
    const experiencia = {
        puesto: exp.puesto,
        empresa: exp.empresa,
        inicioExperiencia: exp.inicioExperiencia,
        finExperiencia: exp.finExperiencia
    }

    return experiencia;
}