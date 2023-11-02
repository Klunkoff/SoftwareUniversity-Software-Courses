import { getMyPosts } from "../data.js";
import { render, html } from "../node_modules/lit-html/lit-html.js";

const mainElement = document.getElementById('main-content');

export async function showMyPosts() {

    let user = JSON.parse(localStorage.getItem('user'));
    let myPosts = await getMyPosts(`?where=_ownerId%3D%22${user._id}%22&sortBy=_createdOn%20desc`);

    render(mainPostsTemplate(myPosts), mainElement);
}

let mainPostsTemplate = (myPosts) => {

    let template = html`
<section id="my-posts-page">
    <h1 class="title">My Posts</h1>
    ${myPosts == 0 
    ? html`<h1 class="title no-posts-title">You have no posts yet!</h1>` 
    : html`<div class="my-posts">${myPosts.map(postTemplate)}</div>`}
</section>`;

    return template;
}

let postTemplate = (post) => html`
<div class="post">
    <h2 class="post-title">${post.title}</h2>
    <img class="post-image" src="${post.imageUrl}" alt="Material Image">
    <div class="btn-wrapper">
        <a href="/details/${post._id}" class="details-btn btn">Details</a>
    </div>
</div>`;

