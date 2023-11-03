import { getMyMemes } from "../data.js";
import { render, html } from "../node_modules/lit-html/lit-html.js";

const mainElement = document.querySelector('main');

export async function showMyProfile() {

    let user = JSON.parse(localStorage.getItem('user'));

    let myMemes = await getMyMemes(`?where=_ownerId%3D%22${user._id}%22&sortBy=_createdOn%20desc`);
    
    render(myMemesTemplate(myMemes, user), mainElement);
}

let myMemesTemplate = (myMemes, user) => html`
<section id="user-profile-page" class="user-profile">
<article class="user-info">
    <img id="user-avatar-url" alt="user-profile" src="/images/${user.gender}.png">
    <div class="user-content">
        <p>Username: ${user.username}</p>
        <p>Email: ${user.email}</p>
        <p>My memes count: ${myMemes.length}</p>
    </div>
</article>
<h1 id="user-listings-title">User Memes</h1>
<div class="user-meme-listings">
    ${myMemes.length == 0 ? html`
<p class="no-memes">No memes in database.</p>` : myMemes.map(memeTemplate)}
</div>`;

let memeTemplate = (meme) => {

    let template = html`
    <div class="user-meme">
        <p class="user-meme-title">${meme.title}</p>
        <img class="userProfileImage" alt="meme-img" src="${meme.imageUrl}">
        <a class="button" href="/details/${meme._id}">Details</a>
    </div>`;

    return template;
}

