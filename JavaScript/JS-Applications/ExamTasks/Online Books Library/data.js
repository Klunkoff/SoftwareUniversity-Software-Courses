import * as api from './api.js';

let endpoints = {

    'allBooks' : '/data/books?sortBy=_createdOn%20desc',
    'myBooks' : '/data/books',
    'addBook' : '/data/books',
    'bookById' : '/data/books/',
    'editBookById' : '/data/books/',
    'login' : '/users/login',
    'register' : '/users/register',
    'logout' : '/users/logout',
    'likes' : '/data/likes',
}

export async function getAllBooks() {
   
   return api.get(endpoints.allBooks);
}

export async function getMyBooks(id) {
   
    return api.get(endpoints.myBooks + id);
 }

export async function addBook(book) {

    return api.post(endpoints.addBook, book);
}

export async function editBook(id, book) {

    return api.put(endpoints.editBookById + id, book);
}

export async function getBookById(id) {

    return api.get(endpoints.bookById + id);
}

export async function deleteBookById(id) {
    
    return api.del(endpoints.bookById + id);
}

export async function likeBook(bookId) {

    return api.post(endpoints.likes, {bookId});
}

export async function getLikesBookById(id) {

    return api.get(endpoints.likes + id);
}

export async function getMyLikesBookById(id) {

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