export const uploadLogout = async() =>{

    try {
        const logoutRequest = await fetch('http://localhost:9001/api/logins/logout' , {
            method: 'GET',
            headers : {
                'Content-Type' : 'application/json',
            }
        })

        if(!logoutRequest.ok) console.error('AAAAAAAAAAAALOGOUT')

    } 
    catch (error) {
        console.error('Error capturado logout: ' + error)
    }
}