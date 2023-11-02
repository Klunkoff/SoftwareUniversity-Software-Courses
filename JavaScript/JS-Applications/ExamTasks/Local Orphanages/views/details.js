import { deletePostById, donationPost, getDonationsPostById, getMyDonationsPostById, getPostById } from "../data.js";
import { render, html, nothing } from "../node_modules/lit-html/lit-html.js";
import page from "../node_modules/page/page.mjs";

const mainElement = document.getElementById('main-content');

let context = null;

export async function showDetails(ctx) {

    context = ctx;

    let result = await loadDetails(ctx.params.id);
    render(result, mainElement);
}

let detailsTemplate = (post, isOwner, showDonationButton, donations, user) => {

    let template = html`
    <section id="details-page">
            <h1 class="title">Post Details</h1>

            <div id="container">
                <div id="details">
                    <div class="image-wrapper">
                        <img src="${post.imageUrl}" alt="Material Image" class="post-image">
                    </div>
                    <div class="info">
                        <h2 class="title post-title">${post.title}</h2>
                        <p class="post-description">Description: ${post.description}</p>
                        <p class="post-address">Address: ${post.address}</p>
                        <p class="post-number">Phone number: ${post.phone}</p>
                        <p class="donate-Item">Donate Materials: ${donations}</p>

                        ${user ? html `<div class="btns">

                        <!--Edit and Delete are only for creator-->

                        ${isOwner ? html`
                        <a href="/edit/${post._id}" class="edit-btn btn">Edit</a>
                        <a @click=${onDelete} href="javascript:void(0)" class="delete-btn btn">Delete</a>` : nothing }
                    
                        <!--Bonus - Only for logged-in users ( not authors )-->
                        
                        ${showDonationButton ? html`
                        <a @click=${onDonation} href="javascript:void(0)" class="donate-btn btn">Donate</a>` : nothing}

                    </div>` : nothing }

                    </div>
                </div>
            </div>
        </section>`;

    return template;

};

async function loadDetails(id) {

    let user = JSON.parse(localStorage.getItem('user'));

    let [post, donations, hasDonation] = await Promise.all([
        getPostById(id),
        getDonationsPostById(`?where=postId%3D%22${id}%22&distinct=_ownerId&count`),
        user ? getMyDonationsPostById(`?where=postId%3D%22${id}%22%20and%20_ownerId%3D%22${user._id}%22&count`) : null
    ]);

    let isOwner = null;

    if (user) {
        isOwner = user._id == post._ownerId;
    }
  
    let showDonationButton = isOwner == false && hasDonation == 0 && user != null;

    return detailsTemplate(post, isOwner, showDonationButton, donations, user);
}

async function onDelete() {

    let choice = confirm('Are you sure you want to delete this post?');

    if (choice) {
        await deletePostById(context.params.id);
        page.redirect('/dashboard');
    }
}

async function onDonation() {

    await donationPost(context.params.id);

    page.redirect(`/details/${context.params.id}`);
}



