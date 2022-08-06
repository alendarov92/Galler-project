const baseUrl = 'http://localhost:3030/jsonstore/gallery';

export const getAll = () => {
    return fetch(`${baseUrl}`)
        .then(res => res.json())
}