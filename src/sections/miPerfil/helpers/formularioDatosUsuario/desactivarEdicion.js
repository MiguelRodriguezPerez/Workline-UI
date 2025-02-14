export const desactivarEdicion = () => {
    
    for(const input of document.getElementById('form-user').getElementsByTagName('input')) {
        input.setAttribute('readonly',true);
    }

    for(const label of document.getElementById('form-user').getElementsByTagName('label')){
        label.setAttribute('hidden',true);
    }

    //Quita el borde a los input
    for(const inputText of Array.from(document.getElementById('form-user').querySelectorAll('input[type=text]'))){
        inputText.style.border = 'none';
    }
}