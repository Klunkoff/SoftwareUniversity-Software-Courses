import * as api from './api.js';

let endpoints = {

    'allPosts' : '/data/posts?sortBy=_createdOn%20desc',
    'createPost' : '/data/posts',
    'myPosts' : '/data/posts',
    'postById' : '/data/posts/',
    'editPostById' : '/data/posts/',
    'login' : '/users/login',
    'register' : '/users/register',
    'logout' : '/users/logout',
    'donations' : '/data/donations',
}

export async function getAllPosts() {
   
   return api.get(endpoints.allPosts);
}

export async function getMyPosts(id) {
   
    return api.get(endpoints.myPosts + id);
 }

export async function createPost(post) {

    return api.post(endpoints.createPost, post);
}

export async function editPost(id, post) {

    return api.put(endpoints.editPostById + id, post);
}

export async function getPostById(id) {

    return api.get(endpoints.postById + id);
}

export async function deletePostById(id) {
    
    return api.del(endpoints.postById + id);
}

export async function donationPost(id) {

    return api.post(endpoints.donations, {id});
}

export async function getDonationsPostById(id) {

    return api.get(endpoints.donations + id);
}

export async function getMyDonationsPostById(id) {

    return api.get(endpoints.donations + id);
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