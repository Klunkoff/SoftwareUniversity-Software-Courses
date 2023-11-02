import { getAllPosts } from "../data.js";
import { render, html } from "../node_modules/lit-html/lit-html.js";

const mainElement = document.getElementById('main-content');

export async function showDashboard() {

    let allPosts = await getAllPosts();
    render(dashboardTemplate(allPosts), mainElement);
}

let dashboardTemplate = (allPosts) => {

    let template = html`
<section id="dashboard-page">
    <h1 class="title">All Posts</h1>
        ${allPosts == 0 
        ? html`<h1 class="title no-posts-title">No posts yet!</h1>` 
        : html`<div class="all-posts">
                    ${allPosts.map(postTemplate)}
                </div>`}
</section>`;

    return template;
}

let postTemplate = (post) => html`
<div class="post">
    <h2 class="post-title">${post.title}</h2>
    <img class="post-image" src="${post.imageUrl}" alt="Kids clothes">
        <div class="btn-wrapper">
             <a href="/details/${post._id}" class="details-btn btn">Details</a>
        </div>
</div>`;

