import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import '../../styles/seccionBusca/entidadGrid.css';
import { NuevaEntidadWrapper } from "./NuevaEntidadWrapper";

export const EntidadGrid = ({ peticion, Componente, NuevaEntidadComponente, titulo, NoResultsFound }) => {
    const [listaEntidades, setListaEntidades] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const location = useLocation();

    const fetchData = async () => {
        setIsLoading(true);
        const resultado = await peticion();
        if (resultado.status == 200) {
            setListaEntidades(resultado.data);
        } else if (resultado.status === 204) {
            setListaEntidades([]);
        }
        setIsLoading(false);
    };

    useEffect(() => {
        fetchData();
    }, [location]);

    if (isLoading) {
        return null; 
    }

    return (
        <div className="grid-entidad">
            {/* En el grid de ofertas no necesitas este componente */}
            {NuevaEntidadComponente &&
                <NuevaEntidadWrapper NuevaEntidadComponente={<NuevaEntidadComponente refreshData={fetchData} />} titulo={titulo} />}
            <h3>{titulo}</h3>

            <ul className="lista-elementos">
                {listaEntidades.length > 0 ? (
                    listaEntidades.map((entidad) => (
                        <Componente key={entidad.id} data={entidad} refreshData={fetchData} />
                    ))
                ) : (
                    <NoResultsFound />
                )}
            </ul>
        </div>
    );
};
