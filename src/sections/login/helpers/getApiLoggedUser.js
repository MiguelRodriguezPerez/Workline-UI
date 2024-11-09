import Cookies from 'js-cookie';


export const getApiLoggedUser = async() => {

    try {
        const request = await fetch('http://localhost:9001/user/getCurrentUser', {
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json',
                'Authorization' : 'Bearer ' + Cookies.get('jwtToken')
            },
            credentials : 'include'
        });

        if(request.status.toString() === 'NO_CONTENT') return undefined;
        const resultado = await request.json();
        return resultado;
    } 
    catch (error) {
        console.log('error ' + error)
    }
}