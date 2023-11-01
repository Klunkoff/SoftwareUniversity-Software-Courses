import * as api from './api.js';

let endpoints = {

    'allGames' : '/data/games?sortBy=_createdOn%20desc',
    'recentGames' : '/data/games?sortBy=_createdOn%20desc&distinct=category',
    'createGame' : '/data/games',
    'gameById' : '/data/games/',
    'editGameById' : '/data/games/',
    'commentsById' : '/data/comments',
    'createComment' : '/data/comments',
    'login' : '/users/login',
    'register' : '/users/register',
    'logout' : '/users/logout',
}

export async function getAllGames() {
   
   return api.get(endpoints.allGames);
}

export async function getRecentGames() {
   
    return api.get(endpoints.recentGames);
 }

export async function createGame(game) {

    return api.post(endpoints.createGame, game);
}

export async function editGame(id, game) {

    return api.put(endpoints.editGameById + id, game);
}

export async function getGameById(id) {

    return api.get(endpoints.gameById + id);
}

export async function deleteGameById(id) {
    
    return api.del(endpoints.gameById + id);
}

export async function getCommentsById(id) {

    return api.get(endpoints.commentsById + id);
}

export async function createComment(comment) {

    return api.post(endpoints.createComment, comment);
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