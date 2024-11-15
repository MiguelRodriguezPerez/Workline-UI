export const desactivarReadOnly = () => {
    for(const input of document.getElementsByTagName('input')) {
        input.removeAttribute('readonly');
    }

    for(const select of document.getElementsByTagName('select')) {
        select.removeAttribute('readonly');
    }
}

export const activarReadOnly = () => {
    for(const input of document.getElementsByTagName('input')) {
        input.setAttribute('readonly',true);
    }

    for(const select of document.getElementsByTagName('select')) {
        select.setAttribute('readonly',true);
    }
}