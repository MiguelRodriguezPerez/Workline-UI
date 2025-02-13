export const almacenarUsuarioLogueado = (user = {}) => {
    const jsonUser = JSON.stringify(user);
    localStorage.setItem('loggedUser', jsonUser);
}