export const uploadLogin = async(user = {}, csrfToken) =>{
    console.log(csrfToken)

    try {
        const loginRequest = await fetch('http://localhost:9001/api-login' , {
            method: 'POST',
            headers : {
                'X-XSRF-TOKEN' : csrfToken,
                'Content-Type' : 'application-json'
            },
            body: JSON.stringify(user)
        })

        if(!loginRequest.ok) console.error('AAAAAAAAAAAA')
    } 
    catch (error) {
        console.error('Error capturado: ' + error)
    }
}