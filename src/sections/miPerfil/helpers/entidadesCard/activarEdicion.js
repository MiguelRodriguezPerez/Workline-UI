export const activarEdicion = (id = '') => {

    for(const lable of document.getElementById(id).getElementsByTagName('label')){
        lable.removeAttribute('hidden');
    }

    for(const input of document.getElementById(id).getElementsByTagName('input')) {
        input.removeAttribute('readonly');
    }

    //Añade el borde inferior a los input
    for(const inputText of Array.from(document.getElementById(id).querySelectorAll('input[type=text]'))){
        inputText.style.borderBottom = '1px solid black';
    }
}