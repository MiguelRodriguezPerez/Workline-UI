export const getOfertaById = async (id) => {
    
   try {
        const request = await fetch(`http://localhost:9001/internal-api/public/ofertas/getOfertaById/` + id,{
            method: 'GET',
            headers:{
                'Content-Type':'application-json'
            }
        })

        if(!request.ok) throw new Error("Error durante la solicitud " + request.status);

        const resultado = await request.json();
        return resultado;
    } 
    catch (error) {
        console.error('Error al ejecutar la petición de oferta ' + error);
        return error;
    }
}