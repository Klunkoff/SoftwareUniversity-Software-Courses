import * as api from './api.js';

let endpoints = {

    'catalog' : '/data/cars?sortBy=_createdOn%20desc',
    'searchedCars' : '/data/cars',
    'createCar' : '/data/cars',
    'carById' : '/data/cars/',
    'editCarById' : '/data/cars/',
    'myCars' : '/data/cars',
    'login' : '/users/login',
    'register' : '/users/register',
    'logout' : '/users/logout',
}

export async function getCatalog() {
   
   return api.get(endpoints.catalog);
}

export async function getSearchedCars(id) {
   
    return api.get(endpoints.searchedCars + id);
 }

export async function createCar(car) {

    return api.post(endpoints.createCar, car);
}

export async function editCar(id, car) {

    return api.put(endpoints.editCarById + id, car);
}

export async function getCarById(id) {

    return api.get(endpoints.carById + id);
}

export async function getMyCarsById(id) {

    return api.get(endpoints.myCars + id);
}


export async function deleteCarById(id) {
    
    return api.del(endpoints.carById + id);
}



export async function login(username, password) {

    let user = await api.post(endpoints.login, {username, password});
    localStorage.setItem('user', JSON.stringify(user));
}

export async function register(username, password) {

    let user = await api.post(endpoints.register, {username, password});
    localStorage.setItem('user', JSON.stringify(user));
}

export async function logout() {

    api.get(endpoints.logout); // it's important to not be 'await' becouse may have a potential mistake
    localStorage.removeItem('user');
}