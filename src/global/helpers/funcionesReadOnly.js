export const desactivarReadOnly = (id) => {
    for(const input of document.getElementById(id).getElementsByTagName('input')) {
        input.removeAttribute('readonly');
    }

    for(const select of document.getElementById(id).getElementsByTagName('select')) {
        select.removeAttribute('readonly');
    }
}

export const activarReadOnly = (id) => {
    for(const input of document.getElementById(id).getElementsByTagName('input')) {
        input.setAttribute('readonly',true);
    }

    for(const select of document.getElementById(id).getElementsByTagName('select')) {
        select.setAttribute('readonly',true);
    }
}