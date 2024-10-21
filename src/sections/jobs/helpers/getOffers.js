export const getOffers = async() => {
        try {
            const response = await fetch('http://localhost:9001/internal-api/public/ofertas/all', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
    
            if (!response.ok) { // Verifica si la respuesta fue exitosa
                throw new Error('Error en la petición: ' + response.status);
            }
    
            const resultados = await response.json(); // Convierte la respuesta a JSON
            console.log(resultados); // Muestra los resultados en la consola
            return resultados; // Devuelve los resultados para su uso posterior
    
        } catch (error) {
            console.error('Hubo un error:', error); // Manejo de errores
            return error;
        }
}