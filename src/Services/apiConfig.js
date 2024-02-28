const baseURL = 'http://localhost:3000/api';

const token = localStorage.getItem('token');

const authHeaders = 
{
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': `JWT ${token}`
}

export const apiCall = async function (method='get', endpoint, body)
{
    return await fetch(`${baseURL}/${endpoint}`, {
        method: method,
        headers: authHeaders,
        body: body
    });
}