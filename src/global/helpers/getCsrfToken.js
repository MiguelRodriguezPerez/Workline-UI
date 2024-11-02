export const getCsrfToken = async() => {
    try {
        const request = await fetch('http://localhost:9001/get-csrf-token' , {
            method: 'GET',
            headers: {
                'Content-Type': 'application-json'
            }
        });

        if(!request.ok) console.error('AAAAAAAAAAAAAAAAA')

        const token = await request.json();
        return token;
        
        
    } catch (error) {
        console.error('BBBBBBBBB '+ error);
    }
}