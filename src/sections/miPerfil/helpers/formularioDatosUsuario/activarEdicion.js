export const activarEdicion = () => {

    for(const lable of document.getElementById('form-user').getElementsByTagName('label')){
        lable.removeAttribute('hidden');
    }

    for(const input of document.getElementById('form-user').getElementsByTagName('input')) {
        input.removeAttribute('readonly');
    }

    //Añade el borde inferior a los input
    for(const inputText of Array.from(document.getElementById('form-user').querySelectorAll('input[type=text]'))){
        inputText.style.borderBottom = '1px solid black';
    }
}