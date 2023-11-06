import * as api from './api.js';

let endpoints = {

    'allAlbums' : '/data/albums?sortBy=_createdOn%20desc',
    'addAlbum' : '/data/albums',
    'albumById' : '/data/albums/',
    'editAlbumById' : '/data/albums/',
    'login' : '/users/login',
    'register' : '/users/register',
    'logout' : '/users/logout',
    'likes' : '/data/likes',
}

export async function getAllAlbums() {
   
   return api.get(endpoints.allAlbums);
}

export async function addAlbum(album) {

    return api.post(endpoints.addAlbum, album);
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

export async function likeAlbum(albumId) {

    return api.post(endpoints.likes, {albumId});
}

export async function getLikesAlbumById(id) {

    return api.get(endpoints.likes + id);
}

export async function getMyLikesAlbumById(id) {

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