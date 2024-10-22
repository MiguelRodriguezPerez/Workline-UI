export const getTiposContrato = async() => {
    try{
        const solicitud = await fetch('http://localhost:9001/internal-api/public/ofertas/tiposContrato',{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if(!solicitud.ok) throw new Error('Error al solicitar tipos contrato: ' + error);
        
        const resultado = await solicitud.json();
        return resultado;
    }
        catch(error){
        console.error('Error al ejecutar la petición ' + error);
    }
}