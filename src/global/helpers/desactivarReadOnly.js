export const desactivarReadOnly = () => {
    for(const input of document.getElementsByTagName('input')) {
        input.removeAttribute('readonly');
    }

    for(const select of document.getElementsByTagName('select')) {
        select.removeAttribute('readonly');
    }
}