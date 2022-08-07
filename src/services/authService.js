import * as requset from "./requester"

const baseUrl = 'http://localhost:3030';

export const login = (email, password) =>
    requset.psot(`${baseUrl}/users/login`, { email, password });
