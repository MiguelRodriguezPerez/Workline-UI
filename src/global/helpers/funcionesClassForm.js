'use strict'

export const quitarBorde = (id) => {
    for(const inputText of Array.from(document.getElementById(id).querySelectorAll('input[type=text]'))){
        inputText.style.border = 'none';
    }
}

export const ponerBorde = (id) => {
    for(const inputText of Array.from(document.getElementById(id).querySelectorAll('input[type=text]'))){
        inputText.style.borderBottom = '1px solid black';
    }
}