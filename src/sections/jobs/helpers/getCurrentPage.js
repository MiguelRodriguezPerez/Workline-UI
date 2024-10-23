export const getCurrentPage = async (pagina,busqueda) => {
    const bodyRequest = {
        pagina,
        busqueda,
    }

    try {
        const response = await fetch('http://localhost:9001/internal-api/public/ofertas/pagina', {
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