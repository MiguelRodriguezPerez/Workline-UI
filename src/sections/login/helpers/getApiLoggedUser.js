export const getApiLoggedUser = async() => {
    try {
        const request = await fetch('http://localhost:9001/api/logins/currentUser', {
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json'
            }
        });

        if(request.status.toString() === 'NO_CONTENT') return undefined;
        const resultado = await request.json();
        return resultado;
    } 
    catch (error) {
        console.log('error ' + error)
    }
}