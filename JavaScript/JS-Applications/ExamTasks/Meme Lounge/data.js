import * as api from './api.js';

let endpoints = {

    'allMemes' : '/data/memes?sortBy=_createdOn%20desc',
    'myMemes' : '/data/memes',
    'createMeme' : '/data/memes',
    'memeById' : '/data/memes/',
    'editMemeById' : '/data/memes/',
    'login' : '/users/login',
    'register' : '/users/register',
    'logout' : '/users/logout',
}

export async function getAllMemes() {
   
   return api.get(endpoints.allMemes);
}

export async function getMyMemes(id) {
   
    return api.get(endpoints.myMemes + id);
 }

export async function createMeme(meme) {

    return api.post(endpoints.createMeme, meme);
}

export async function editMeme(id, meme) {

    return api.put(endpoints.editMemeById + id, meme);
}

export async function getMemeById(id) {

    return api.get(endpoints.memeById + id);
}

export async function deleteMemeById(id) {
    
    return api.del(endpoints.memeById + id);
}



export async function login(email, password) {

    let user = await api.post(endpoints.login, {email, password});
    localStorage.setItem('user', JSON.stringify(user));
}

export async function register(username, email, password, gender) {

    let user = await api.post(endpoints.register, {username, email, password, gender});
    localStorage.setItem('user', JSON.stringify(user));
}

export async function logout() {

    api.get(endpoints.logout); // it's important to not be 'await' becouse may have a potential mistake
    localStorage.removeItem('user');
}