import { useEffect } from "react";
import { CabeceraMiPerfil } from "../CabeceraMiPerfil"

export const EntidadGrid = ({ peticion , Componente}) => {

  const [listaElementos, setListaElementos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const resultado = await peticion();
      setListaElementos(resultado.data);
    }
    fetchData();
  }, []);

  return (
    <>
      <CabeceraMiPerfil/>
        { 
          listaElementos.map( (elemento) => <Componente data={elemento}/> )
        }
    </>
  );
}
