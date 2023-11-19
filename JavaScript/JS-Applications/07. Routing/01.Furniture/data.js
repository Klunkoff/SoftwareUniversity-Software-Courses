import * as api from './api.js';

let endpoints = {

    'allFurniture' : '/data/catalog',
    'myFurniture' : '/data/catalog',
    'create' : '/data/catalog',
    'furnitureById' : '/data/catalog/',
    'editFurnitureById' : '/data/catalog/',
    'login' : '/users/login',
    'register' : '/users/register',
    'logout' : '/users/logout',
}

export async function getAllFurniture() {
   
   return api.get(endpoints.allFurniture);
}

export async function getMyFurniture(id) {
   
    return api.get(endpoints.allFurniture + id);
 }

export async function createFurniture(furniture) {

    return api.post(endpoints.create, furniture);
}

export async function editFurniture(id, furniture) {

    return api.put(endpoints.editFurnitureById + id, furniture);
}

export async function getFurnitureById(id) {

    return api.get(endpoints.furnitureById + id);
}

export async function deleteFurnitureById(id) {
    
    return api.del(endpoints.furnitureById + id);
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