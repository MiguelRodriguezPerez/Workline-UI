export const prepararExperiencia = (exp = {}) => {
    const experiencia = {
        id : exp.id,
        puesto : exp.puesto,
        empresa : exp.empresa,
        inicioExperiencia : exp.inicioExperiencia,
        finExperiencia : exp.finExperiencia
    }
    
    return experiencia;
}