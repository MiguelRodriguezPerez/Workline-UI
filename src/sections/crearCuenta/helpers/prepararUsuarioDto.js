export const prepararUsuarioDto = (dto) => {

    const dtoPreparado = {
        nombre: dto.nombre,
        email: dto.email,
        ciudad: dto.ciudad,
        telefono: dto.telefono,
        password: dto.password,
        rol: dto.rol,
    };

    return dtoPreparado;
}