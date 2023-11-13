import * as api from './api.js';

let endpoints = {

    'allPets' : '/data/pets?sortBy=_createdOn%20desc&distinct=name',
    'createPet' : '/data/pets',
    'petById' : '/data/pets/',
    'editPetById' : '/data/pets/',
    'login' : '/users/login',
    'register' : '/users/register',
    'logout' : '/users/logout',
    'donations' : '/data/donation',
}

export async function getAllPets() {
   
   return api.get(endpoints.allPets);
}

export async function createPet(pet) {

    return api.post(endpoints.createPet, pet);
}

export async function editPet(id, pet) {

    return api.put(endpoints.editPetById + id, pet);
}

export async function getPetById(id) {

    return api.get(endpoints.petById + id);
}

export async function deletePetById(id) {
    
    return api.del(endpoints.petById + id);
}

export async function donationPet(petId) {

    return api.post(endpoints.donations, {petId});
}

export async function getDonationsPetById(id) {

    return api.get(endpoints.donations + id);
}

export async function getMyDonationsPetById(id) {

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