import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router';
import { useModalidades, useSwitchReadOnly, useTiposContrato } from '../../../../global/hooks';
import { obtenerOfertaPorId } from '../../../jobs/api';
import { editarOferta, publicarNuevaOferta } from '../../../../global/api/seccionContrata';
import { prepararOfertaApi } from '../../helpers';
import { getViewString } from '../../../../global/helpers';
import { NuevaOfertaLinks } from './NuevaOfertaLinks';
import { EditarOfertaLinks } from './EditarOfertaLinks';

import '../../styles/formulariosOferta/ofertaForm.css';
import '/src/global/styles/elementos.css';
import '/src/global/styles/formularios.css';

/*Como 0 es el valor que se asignará al id en caso de no existir, servirá
para comprobar si se esta creando una nueva oferta o se esta editando 
una existente*/
export const FormularioOferta = ({ id = 0 }) => {

    const location = useLocation();
    const { modalidades } = useModalidades();
    const { tiposContrato } = useTiposContrato();
    const navigate = useNavigate();
    const { register, reset, formState: { errors }, handleSubmit } = useForm({});

    /*Esta función sirve para decidir si se le asignan valores por defecto de la oferta
    al formulario. Si el número no es 0, significa que se está editando una oferta*/
    const asyncEffectWrapper = async () => {
        if(id && id !== 0){
            const resultado = await obtenerOfertaPorId(id);
            console.log(resultado.data)
            if(resultado.status === 200) reset(resultado.data);
        }
    }
    
    useEffect(() => {
        asyncEffectWrapper();
    },[id])


    /*Si id es 0, se estará creando una nueva oferta, si no es 0
    se estará editando*/
    const submitWrapper = async(oferta) => {
        if(id === 0) {
            const ofertaPreparada = prepararOfertaApi(oferta)
            const resultado = await publicarNuevaOferta(ofertaPreparada);
            if(resultado.status === 201) navigate(-1);
        }
        else {
            const ofertaPreparada = prepararOfertaApi(oferta)
            const resultado = await editarOferta(ofertaPreparada , id);
            if(resultado.status === 201) navigate(-1);
        }
    }


    return (
            <>
                {
                    location.pathname.includes('nuevaOferta') ? 
                    <NuevaOfertaLinks reset={reset}/>
                    :
                    <EditarOfertaLinks id={id} reset={reset}/>
                }
                <form className='oferta-form' onSubmit={handleSubmit(submitWrapper)} method='post' id={id}>
                <section className='nube primera-seccion'>
                    <div>
                        <label>Puesto</label>
                        <input type="text" className={errors.puesto ? 'input-error' : ''}
                            name='puesto'
                            {
                            ...register('puesto', {
                                required: 'Campo obligatorio',
                                maxLength: {
                                    value: 20,
                                    message: 'Máximo 20 carácteres'
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
                                modalidades.map((modalidad) => <option key={modalidad} value={modalidad}>{getViewString(modalidad)}</option>)
                            }
                        </select>
                        <p className="mensaje-error">{errors.modalidadTrabajo?.message}</p>

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
                                tiposContrato.map((tipo) => <option key={tipo} value={tipo}>{getViewString(tipo)}</option>)
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
