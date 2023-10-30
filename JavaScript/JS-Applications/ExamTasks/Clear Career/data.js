import * as api from './api.js';

let endpoints = {

    'allOffers' : '/data/offers?sortBy=_createdOn%20desc',
    'createOffer' : '/data/offers',
    'offerById' : '/data/offers/',
    'editOfferById' : '/data/offers/',
    'login' : '/users/login',
    'register' : '/users/register',
    'logout' : '/users/logout',
    'applications' : '/data/applications',
}

export async function getAllOffers() {
   
   return api.get(endpoints.allOffers);
}

export async function createOffer(offer) {

    return api.post(endpoints.createOffer, offer);
}

export async function editOffer(id, offer) {

    return api.put(endpoints.editOfferById + id, offer);
}

export async function getOfferById(id) {

    return api.get(endpoints.offerById + id);
}

export async function deleteOfferById(id) {
    
    return api.del(endpoints.offerById + id);
}

export async function applyOffer(offerId) {

    return api.post(endpoints.applications, {offerId});
}

export async function getApplicationsOfferById(id) {

    return api.get(endpoints.applications + id);
}

export async function getMyApplicationsOfferById(id) {

    return api.get(endpoints.applications + id);
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