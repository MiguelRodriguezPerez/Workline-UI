import { useFieldArray } from 'react-hook-form';

import '../../styles/gridStringsOferta.css'
import '/src/global/styles/elementos.css'
import { useState } from 'react';

export const GridStringsOferta = ({lista = '', listaValores = [], control, register, titulo = '' }) => {
    

    const [inputValue, setInputValue] = useState('');
    const { fields, append, remove, replace } = useFieldArray({
        control,
        name : lista,
    });

    const appendWrapper = () => {
        append({ texto : inputValue });
        console.log(fields)
        setInputValue('');
    }

    return (
        <div className='grid-strings nube'>
            <label>{titulo}</label>
            {
                fields.length > 0 &&
                fields.map((field, index) => (
                <div key={field.id}>
                    <p>{field.texto}</p>
                    <button type="button" onClick={() => remove(index)}>Eliminar</button>
                </div>
                ))
            }
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
            <button type="button" className='green-button' onClick={appendWrapper}>Añadir</button>
        </div>
    );
};
