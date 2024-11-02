
export const uploadLogout = async() =>{

    try {
        const loginRequest = await fetch('http://localhost:9001/api/logins/logout' , {
            method: 'GET',
            headers : {
                'Content-Type' : 'application/json',
            }
        })

        if(!loginRequest.ok) console.error('AAAAAAAAAAAALOGOUT')

        const response = await loginRequest.json();
        return response;
    } 
    catch (error) {
        console.error('Error capturado logout: ' + error)
    }
}