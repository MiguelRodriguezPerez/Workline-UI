export const uploadLogin = async(user = {}) =>{

    // const { token } = await getCsrfToken();
    // console.log(token)

    try {
        const loginRequest = await fetch('http://localhost:9001/api/logins/login' , {
            method: 'POST',
            headers : {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify(user)
        })

        if(!loginRequest.ok) console.error('AAAAAAAAAAAA')

        const response = await loginRequest.json();
        console.log(response);
        return response;
    } 
    catch (error) {
        console.error('Error capturado: ' + error)
    }
}