
const url = 'http://localhost:3030/jsonstore/advanced/table';

async function getData(url) {

    let response = await fetch(url);
    let responseData = await response.json();
 
    return responseData;
 }

export async function get() {
    return await getData(url);
}