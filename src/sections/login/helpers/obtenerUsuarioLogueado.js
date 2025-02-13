export const obtenerUsuarioLogueado = () => {
    return JSON.parse(localStorage.getItem('loggedUser'));
}