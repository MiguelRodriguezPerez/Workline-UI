export const activarReadOnly = () => {
    for(const input of document.getElementsByTagName('input')) {
        input.setAttribute('readonly',true);
    }

    for(const select of document.getElementsByTagName('select')) {
        select.setAttribute('readonly',true);
    }
}