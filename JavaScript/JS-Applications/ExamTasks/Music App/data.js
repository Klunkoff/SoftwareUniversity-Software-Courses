import * as api from './api.js';

let endpoints = {

    'catalog' : '/data/albums?sortBy=_createdOn%20desc&distinct=name',
    'searchedAlbums' : '/data/albums',
    'createAlbum' : '/data/albums',
    'albumById' : '/data/albums/',
    'editAlbumById' : '/data/albums/',
    'login' : '/users/login',
    'register' : '/users/register',
    'logout' : '/users/logout',
}

export async function getCatalog() {
   
   return api.get(endpoints.catalog);
}

export async function getSearchedAlbums(id) {
   
    return api.get(endpoints.searchedAlbums + id);
 }

export async function createAlbum(album) {

    return api.post(endpoints.createAlbum, album);
}

export async function editAlbum(id, album) {

    return api.put(endpoints.editAlbumById + id, album);
}

export async function getAlbumById(id) {

    return api.get(endpoints.albumById + id);
}

export async function deleteAlbumById(id) {
    
    return api.del(endpoints.albumById + id);
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