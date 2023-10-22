
const url = 'http://localhost:3030/jsonstore/advanced/dropdown';

const mehtods = {
    getReguest: 'GET',
    postRequest: 'POST',
}

async function request(method, url, data) {

    const options = {
        method,
        headers: {},
    }

    if (data !== undefined) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    try {

        let response = await fetch(url, options);

        if (response.ok === false) {
            let error = await response.json();
            throw new Error(error.message);

        } else {
            return response.json();
        }

    } catch (error) {
        alert(error.message)
        throw error;
    }
}

async function get() {
    return request(mehtods.getReguest, url);
}

function post(data) {
    return request(mehtods.postRequest, url, data);
}

export {

    get,
    post,
}

