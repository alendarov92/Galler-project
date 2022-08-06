const baseUrl = 'http://localhost:3030';

export const getAll = () => {
    return fetch(`${baseUrl}/jsonstore/gallery/gallery`)
        .then(res => res.json())
}