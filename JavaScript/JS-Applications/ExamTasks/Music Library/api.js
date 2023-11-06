const host = 'http://localhost:3030';

async function request(method, url, data) {

    let options = {
        method,
        headers: {},
    }

    if (data !== undefined) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    let user = JSON.parse(localStorage.getItem('user'));

    if(user) {
        let token = user.accessToken;
        options.headers['X-Authorization'] = token;
    }

    try {

        let response = await fetch(host + url, options);

        if (response.ok === false) {

            if(response.status == 403) {
                localStorage.removeItem('user');
            }

            let error = await response.json();
            throw new Error(error.message);
        }

        if (response.status === 204) {
            return response;

        } else {
            return response.json();
        }

    } catch (error) {
        alert(error.message);
        throw error;
    }
}

let get = request.bind(null, 'GET');  // binded decoration function for request func to make 
let post = request.bind(null, 'POST'); // different CRUD operations easily
let put = request.bind(null, 'PUT');
let del = request.bind(null, 'DELETE');

export {
    get, 
    post, 
    put, 
    del
}