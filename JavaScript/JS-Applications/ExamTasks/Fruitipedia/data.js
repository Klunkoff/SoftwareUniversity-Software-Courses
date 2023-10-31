import * as api from './api.js';

let endpoints = {

    'catalog' : '/data/fruits?sortBy=_createdOn%20desc',
    'searchedFruits' : '/data/fruits',
    'createFruit' : '/data/fruits',
    'fruitById' : '/data/fruits/',
    'editFruitById' : '/data/fruits/',
    'login' : '/users/login',
    'register' : '/users/register',
    'logout' : '/users/logout',
}

export async function getCatalog() {
   
   return api.get(endpoints.catalog);
}

export async function getSearchedFruits(id) {
   
    return api.get(endpoints.searchedFruits + id);
 }

export async function createFruit(fruit) {

    return api.post(endpoints.createFruit, fruit);
}

export async function editFruit(id, fruit) {

    return api.put(endpoints.editFruitById + id, fruit);
}

export async function getFruitById(id) {

    return api.get(endpoints.fruitById + id);
}

export async function deleteFruitById(id) {
    
    return api.del(endpoints.fruitById + id);
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

    api.get(endpoints.logout);
    localStorage.removeItem('user');
}