import * as requset from "./requester"

const baseUrl = 'http://localhost:3030/users';

export const login = (email, password) =>
    requset.psot(`${baseUrl}/login`, { email, password });


export const logout = async (accessToken) => {
    try {
        const response = await fetch(`${baseUrl}/logout`, {
            headers: {
                'X-Authorization': accessToken
            }
        })

        return response;
    } catch (error) {
        console.log(error);
    }
    
    
}

