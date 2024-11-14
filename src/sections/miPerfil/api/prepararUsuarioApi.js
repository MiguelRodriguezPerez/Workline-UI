export const prepararUsuarioApi = (usuario = {}) => {
    const usuarioPreparado = {
        nombre: usuario.nombre,
        email: usuario.email,
        telefono: usuario.telefono,
        ciudad: usuario.ciudad
    }

    return usuarioPreparado;
}