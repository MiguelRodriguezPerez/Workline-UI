export const getUrlNumber = (url) =>{
    const parts = url.split('/'); 
    return parts.length > 2 ? parts.slice(2).join('/') : '';
}