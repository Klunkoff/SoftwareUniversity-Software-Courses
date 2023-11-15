import * as api from './api.js';

let endpoints = {

    'catalog' : '/data/shoes?sortBy=_createdOn%20desc',
    'searchedShoes' : '/data/shoes',
    'createShoes' : '/data/shoes',
    'shoeById' : '/data/shoes/',
    'editShoesById' : '/data/shoes/',
    'login' : '/users/login',
    'register' : '/users/register',
    'logout' : '/users/logout',
}

export async function getCatalog() {
   
   return api.get(endpoints.catalog);
}

export async function getSearchedShoes(id) {
   
    return api.get(endpoints.searchedShoes + id);
 }

export async function createShoes(shoe) {

    return api.post(endpoints.createShoes, shoe);
}

export async function editShoes(id, shoes) {

    return api.put(endpoints.editShoesById + id, shoes);
}

export async function getShoeById(id) {

    return api.get(endpoints.shoeById + id);
}

export async function deleteShoeById(id) {
    
    return api.del(endpoints.shoeById + id);
}



export async function login(email, password) {

    let user = await api.post(endpoints.login, {email, password});
    localStorage.setItem('user', JSON.stringify(user));
}

export async function register(email, password) {

    let user = await api.post(endpoints.register, {email, password});
    localStorage.setItem('user', JSON.stringify(user));
}

export async function logout() {

    api.get(endpoints.logout); // it's important to not be 'await' becouse may have a potential mistake
    localStorage.removeItem('user');
}