export const getCurrentPage = (url) =>{
    const parts = url.split('/'); // Divide la cadena en partes
    return parts.length > 2 ? parts.slice(2).join('/') : '';
}