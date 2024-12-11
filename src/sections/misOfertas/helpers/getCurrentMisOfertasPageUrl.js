export const getCurrentMisOfertasPageUrl = () => {
    return parseInt(window.location.pathname.substring(12));
}