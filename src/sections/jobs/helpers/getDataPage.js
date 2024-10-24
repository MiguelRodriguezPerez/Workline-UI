export const getPageData = async (numPagina,busquedaOferta) => {
    /*Los nombres de los campos del objeto que reciba el endopoint 
    siempre tienen que cuadrar. Si contienen clases también deberán coincidir*/

    const bodyRequest = {
        pagina: numPagina,
        busquedaOferta: busquedaOferta,
    }

    console.log(JSON.stringify(bodyRequest))

    try {
        const response = await fetch('http://localhost:9001/internal-api/public/ofertas/busqueda', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bodyRequest) // Convierte el estado del formulario a JSON
        });

        if (!response.ok) { // Verifica si la respuesta fue exitosa
            throw new Error('Error en la petición: ' + response.status);
        }

        const resultados = await response.json();
        return resultados

    } catch (error) {
        console.error('Hubo un error:', error); // Manejo de errores
    }
};