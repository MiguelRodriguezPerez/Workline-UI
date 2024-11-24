import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useModalidades, useSwitchReadOnly, useTiposContrato } from "../../../../global/hooks";
import { obtenerOfertaPorId } from "../../../jobs/api";
import { prepararOfertaApi } from "../../helpers/prepararOfertaApi.js";
import { editarOferta } from "/src/global/api/seccionContrata";

import '/src/global/styles/elementos.css';
import '/src/global/styles/formularios.css';


export const EditarOfertaForm = () => {
  
    const id = parseInt(location.pathname.substring(22));
    const { modalidades } = useModalidades();
    const { tiposContrato } = useTiposContrato();
    const { isReadOnly, turnOnReadOnly, turnOffReadOnly } = useSwitchReadOnly(true, id);
    const navigate = useNavigate();
    const { register, reset, formState: { errors }, handleSubmit } = useForm({
        defaultValues: async () => (await obtenerOfertaPorId(id)).data
    });

    const editSubmit = async (data) => {
        const ofertaPreparada = prepararOfertaApi(data);
        const resultado = await editarOferta(ofertaPreparada, oferta.id);
        if (resultado.status === 201) navigate('/misOfertas/');
    }

    const cancelEvent = () => {
        reset();
        turnOnReadOnly();
    }

    return (
        <>
            <section className="link-section">
                <p className='heading-link' onClick={() => { navigate(-1) }}> Volver atrás </p>
                {
                    isReadOnly ?
                        <p onClick={turnOffReadOnly}> Editar oferta </p>
                        :
                        <p onClick={cancelEvent}> Cancelar </p>
                }
            </section>
            <form className='oferta-form' onSubmit={handleSubmit(editSubmit)} method='post' id={id}>
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
