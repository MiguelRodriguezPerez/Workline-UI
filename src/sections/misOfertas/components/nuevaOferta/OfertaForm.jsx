import { useForm } from 'react-hook-form';
import { useModalidades, useTiposContrato } from '../../../../global/hooks';
import '../../styles/ofertaForm.css';
import '../../../../global/styles/greenButton.css';
import { prepararOfertaApi } from '../../helpers/prepararOfertaApi';
import { useNavigate } from 'react-router';
import { publicarNuevaOferta } from '../../api/publicarNuevaOferta';

export const OfertaForm = () => {
    const { modalidades } = useModalidades();
    const { tiposContrato } = useTiposContrato();
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();
    /*Estas obligado a usar handleSubmit si quieres realizar las validaciones */

    const gestionarSubmit = async (data) => {
        const ofertaPreparada = prepararOfertaApi(data);
        const resultado = await publicarNuevaOferta(ofertaPreparada);
        if(resultado.status === 201) navigate('/misOfertas/')
        else console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAA')
    }

    return (
        <form className='oferta-form' onSubmit={ handleSubmit(gestionarSubmit) } method='post'>
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
                                    message:'Máximo 30 carácteres'
                                },
                                pattern: {
                                    value: /^[a-zA-Z\s]+$/,
                                    message: 'Solo se admiten letras y espacios sin acentos'
                                }
                            })
                        }
                        placeholder='Puesto de trabajo'
                    />
                    <p className="mensaje-error">{errors.puesto?.message}</p>

                    <label>Sector</label>
                    <input type="text" className={errors.sector ? 'input-error' : ''}
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
                        placeholder='Sector laboral'
                    />
                    <p className="mensaje-error">{errors.sector?.message}</p>

                    <label>Modalidad de Trabajo</label>
                    <select name="modalidad" className={errors.modalidad ? 'input-error' : ''}
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
                    <select name="" className={errors.tipoContrato? 'input-error' : ''}
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
                    <input type="text" className={errors.ciudad? 'input-error' : ''}
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
                    <input type="text" className={errors.horas? 'input-error' : ''}
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
                <textarea rows={4} className={errors.descripcion ? 'input-error' : '' }
                    {
                        ...register('descripcion', {
                            pattern: {
                                value: /^[a-zA-Z0-9.,]+$/,
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
    );
};
