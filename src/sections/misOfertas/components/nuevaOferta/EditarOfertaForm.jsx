import { useNavigate } from "react-router";
import { useModalidades, useTiposContrato } from "../../../../global/hooks";
import { editarOferta } from "../../api/editarOferta";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { getOfertaById } from "/src/global/api/getOfertaById.js"
import { prepararOfertaApi } from "../../helpers/prepararOfertaApi.js";


export const EditarOfertaForm = ({ id, isReadOnly = true}) => {

    const { modalidades } = useModalidades();
    const { tiposContrato } = useTiposContrato();
    const navigate = useNavigate();
    const { register, formState: { errors }, handleSubmit } = useForm({
        defaultValues: async () => await getOfertaById(id)
    });

    const [isReadOnlyState, setIsReadOnlyState] = useState(isReadOnly);
    useEffect(() => {
        if (isReadOnlyState) {
            for(const input of document.getElementsByTagName('input')) {
                    input.setAttribute('readonly',true);
            }
        }
        else {
            for(const input of document.getElementsByTagName('input')) {
                input.removeAttribute('readonly');
            }
        }
    }, [isReadOnlyState]);

    const editSubmit = async (data) => {
        const ofertaPreparada = prepararOfertaApi(data);
        const resultado = await editarOferta(ofertaPreparada,id);
        if(resultado.status === 201) navigate('/misOfertas/');
    }

    return (
        <>
            <a className='a-back'
                onClick={(e) => {
                    e.preventDefault();
                    navigate(-1);
                } 
            }> Volver atrás </a>
            {
                isReadOnlyState ? 
                    <a onClick={ (e) => {
                        e.preventDefault();
                        setIsReadOnlyState(false);
                    }}> Editar oferta </a>
                    :
                    <a onClick={ (e) => {
                        e.preventDefault();
                        setIsReadOnlyState(true);
                    }}> Cancelar </a>
            }
            
            <form className='oferta-form' onSubmit={handleSubmit(editSubmit)} method='post'>
                <section className='nube primera-seccion'>
                    <div>
                        <label>Puesto</label>
                        <input type="text" className={errors.puesto ? 'input-error' : ''} 
                            name='puesto'
                            {
                                ...register('puesto', {
                                    required: 'Campo obligatorio',
                                    maxLength: {
                                        value: 30,
                                        message: 'Máximo 30 carácteres'
                                    },
                                    pattern: {
                                        value: /^[a-zA-Z\s]+$/,
                                        message: 'Solo se admiten letras y espacios sin acentos'
                                    }
                                })
                            }
                        />
                        <p className="mensaje-error">{errors.puesto?.message}</p>

                        <label>Sector</label>
                        <input type="text" className={errors.sector ? 'input-error' : ''}
                            name='sector' 
                            {
                                ...register('sector', {
                                    required: 'Campo obligatorio',
                                    maxLength: {
                                        value: 25,
                                        message: 'Máximo 25 carácteres'
                                    },
                                    pattern: {
                                        value: /^[a-zA-Z\s]+$/,
                                        message: 'Solo se admiten letras y espacios sin acentos'
                                    }
                                })
                            }
                        />
                        <p className="mensaje-error">{errors.sector?.message}</p>

                        <label>Modalidad de Trabajo</label>
                        <select className={errors.modalidad ? 'input-error' : ''}
                            name="modalidad" 
                            {
                                ...register('modalidadTrabajo', {
                                    required: 'Selecciona un campo'
                                })
                            }>
                            <option value="">Selecciona una opción ...</option>
                            {
                                modalidades.map((modalidad) => <option key={modalidad} value={modalidad}>{modalidad}</option>)
                            }
                        </select>
                        <p className="mensaje-error">{errors.modalidad?.message}</p>

                        <label>Salario Anual</label>
                        <input type="text" className={errors.salarioAnual ? 'input-error' : ''}
                            name='salarioAnual' 
                            {
                                ...register('salarioAnual', {
                                    pattern: {
                                        value: /^[0-9]+$/,
                                        message: 'Solo se admiten números'
                                    }
                                })
                            }
                            placeholder='Salario anual'
                        />
                        <p className="mensaje-error">{errors.salarioAnual?.message}</p>
                    </div>

                    <div>
                        <label>Tipo de Contrato</label>
                        <select className={errors.tipoContrato ? 'input-error' : ''}
                            name="tipoContrato" 
                            {
                                ...register('tipoContrato', {
                                    required: 'Selecciona un campo'
                                })
                            }>
                            <option value="">Selecciona una opción ...</option>
                            {
                                tiposContrato.map((tipo) => <option key={tipo} value={tipo}>{tipo}</option>)
                            }
                        </select>
                        <p className="mensaje-error">{errors.tipoContrato?.message}</p>

                        <label>Ciudad</label>
                        <input type="text" className={errors.ciudad ? 'input-error' : ''}
                            name='ciudad' 
                            {
                                ...register('ciudad', {
                                    required: 'Campo obligatorio',
                                    pattern: {
                                        value: /^[a-zA-Z\s]+$/,
                                        message: 'Solo se admiten letras y espacios sin acentos'
                                    }
                                })
                            }
                            placeholder='Ciudad'
                        />
                        <p className="mensaje-error">{errors.ciudad?.message}</p>

                        <label>Horas</label>
                        <input type="text" className={errors.horas ? 'input-error' : ''}
                            name='horas' 
                            {
                                ...register('horas', {
                                    required: 'Campo obligatorio',
                                    pattern: {
                                        value: /^[0-9]+$/,
                                        message: 'Solo se permiten números',
                                    }
                                })
                            }
                            placeholder='Horas'
                        />
                        <p className="mensaje-error">{errors.horas?.message}</p>

                        <button className='green-button'>
                            Subir oferta
                        </button>
                    </div>

                </section>
                <section className='nube segunda-seccion'>
                    <label>Descripción</label>
                    <textarea rows={4} className={errors.descripcion ? 'input-error' : ''}
                        name='descripcion'  
                        {
                            ...register('descripcion', {
                                pattern: {
                                    value: /^[a-zA-Z0-9.,áéíóúÁÉÍÓÚñÑüÜ\s]+$/,
                                    message: 'No se admiten acentos',
                                },
                                maxLength: {
                                    value: 80,
                                    message: 'Máximo 80 carácteres',
                                }
                            })
                        }
                    />
                    <p className="mensaje-error">{errors.descripcion?.message}</p>
                </section>
            </form>
        </>
    );
}