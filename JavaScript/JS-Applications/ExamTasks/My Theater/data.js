import * as api from './api.js';

let endpoints = {

    'allTheaters' : '/data/theaters?sortBy=_createdOn%20desc&distinct=title',
    'myTheaters' : '/data/theaters',
    'createTheater' : '/data/theaters',
    'theaterById' : '/data/theaters/',
    'editTheaterById' : '/data/theaters/',
    'login' : '/users/login',
    'register' : '/users/register',
    'logout' : '/users/logout',
    'likes' : '/data/likes',
}

export async function getAllTheaters() {
   
   return api.get(endpoints.allTheaters);
}

export async function getMyTheaters(id) {
   
    return api.get(endpoints.myTheaters + id);
 }

export async function createTheater(theater) {

    return api.post(endpoints.createTheater, theater);
}

export async function editTheater(id, theater) {

    return api.put(endpoints.editTheaterById + id, theater);
}

export async function getTheaterById(id) {

    return api.get(endpoints.theaterById + id);
}

export async function deleteTheaterById(id) {
    
    return api.del(endpoints.theaterById + id);
}

export async function likeTheater(theaterId) {

    return api.post(endpoints.likes, {theaterId});
}

export async function getLikesTheaterById(id) {

    return api.get(endpoints.likes + id);
}

export async function getMyLikesTheaterById(id) {

    return api.get(endpoints.likes + id);
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