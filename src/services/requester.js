const requset = async (method, url, data) => {


    try {

        const user = localStorage.getItem('auth');
        const auth = JSON.parse(user || {});

        let headers = {}

        if (auth.accessToken) {

            headers['X-Authorization'] = auth.accessToken;
        }


        let buildRequest;

        if (method === 'GET') {
            buildRequest = fetch(url, { headers });
        } else {
            buildRequest = fetch(url, {
                method,
                headers: {
                    ...headers,
                    'content-type': 'application.json'
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
export const post = requset.bind({}, 'POST')
export const put = requset.bind({}, 'PUT')
export const del = requset.bind({}, 'DELETE')