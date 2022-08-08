const requset = async (method, url, data) => {

    
    try {
        let buildRequest;

        if (method === 'GET') {
            buildRequest = fetch(url);
        } else {
            buildRequest = fetch(url, {
                method,
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
        }
        const response = await buildRequest

        console.log(response);
        
        const result = await response.json();

        return result
    } catch (error) {
        console.log(error);
        
    }

}

export const get = requset.bind({}, 'GET')
export const psot = requset.bind({}, 'POST')
export const put = requset.bind({}, 'PUT')
export const del = requset.bind({}, 'DELETE')