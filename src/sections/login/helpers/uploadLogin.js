export const uploadLogin = async(user = {}) =>{

    try {
        const loginRequest = await fetch('http://localhost:9001/auth/login' , {
            method: 'POST',
            headers : {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify(user),
            credentials: 'include'
        })

        if(!loginRequest.ok) return null;
        else {
            const response = await loginRequest.json();
            console.log(response);
            return response;
        }
        
    } 
    catch (error) {
        console.log(error)
        console.error('Error capturado: ' + error)
    }
}