export const desactivarEdicion = (id = '') => {
    
    for(const input of document.getElementById(id).getElementsByTagName('input')) {
        input.setAttribute('readonly',true);
    }

    for(const label of document.getElementById(id).getElementsByTagName('label')){
        label.setAttribute('hidden',true);
    }

    //Quita el borde a los input
    for(const inputText of Array.from(document.getElementById(id).querySelectorAll('input[type=text]'))){
        inputText.style.border = 'none';
    }
}