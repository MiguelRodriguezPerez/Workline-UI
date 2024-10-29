export const getModalidades = async() => {

    try{
        const solicitud = await fetch('http://localhost:9001/internal-api/public/ofertas/modalidades',{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if(!solicitud.ok) throw new Error("Error en la petición " + solicitud.status);
       
        
        const resultado = await solicitud.json();
        console.log(resultado)
        return resultado;
    }
    catch( error ){
        console.error('Error al obtener las modalidades de trabajo: ' + error)
        return error;
    }
}