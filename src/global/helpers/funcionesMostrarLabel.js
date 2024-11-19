export const ocultarLabel = (id) => {
    for(const label of document.getElementById(id).getElementsByTagName('label')){
        label.setAttribute('hidden',true);
    }
}

export const mostrarLabel = (id) => {
    for(const lable of document.getElementById(id).getElementsByTagName('label')){
        lable.removeAttribute('hidden');
    }
}