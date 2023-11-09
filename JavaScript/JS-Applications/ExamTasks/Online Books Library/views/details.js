import { deleteBookById, getBookById, getLikesBookById, getMyLikesBookById, likeBook } from "../data.js";
import { render, html, nothing } from "../node_modules/lit-html/lit-html.js";
import page from "../node_modules/page/page.mjs";

const mainElement = document.getElementById('site-content');

let context = null;

export async function showDetails(ctx) {

    context = ctx;

    let result = await loadDetails(ctx.params.id);
    render(result, mainElement);
}

let detailsTemplate = (book, isOwner, showLikeButton, likes) => { 

   let template = html`<section id="details-page" class="details">
            <div class="book-information">
                <h3>${book.title}</h3>
                <p class="type">Type: ${book.type}</p>
                <p class="img"><img src=${book.imageUrl}></p>
                <div class="actions">
                    <!-- Edit/Delete buttons ( Only for creator of this book )  -->
                    ${isOwner ? html`
                    <a class="button" href="/edit/${book._id}">Edit</a>
                    <a @click=${onDelete} class="button" href="javascript:void(0)">Delete</a>` : nothing}
                    
                    <!-- Bonus -->
                    <!-- Like button ( Only for logged-in users, which is not creators of the current book ) -->
                    ${showLikeButton ? html`
                    <a @click=${onLike} class="button" href="javascript:void(0)">Like</a>` : nothing }
                    

                    <!-- ( for Guests and Users )  -->
                    <div class="likes">
                        <img class="hearts" src="/images/heart.png">
                        <span id="total-likes">Likes: ${likes}</span>
                    </div>
                    <!-- Bonus -->
                </div>
            </div>
            <div class="book-description">
                <h3>Description:</h3>
                <p>${book.description}</p>
            </div>
        </section>`;
        
        return template;
        
    };

async function loadDetails(id) {

    let user = JSON.parse(localStorage.getItem('user'));

    let [book, likes, hasLike] = await Promise.all([
        getBookById(id), 
        getLikesBookById(`?where=bookId%3D%22${id}%22&distinct=_ownerId&count`),
        user ? getMyLikesBookById(`?where=bookId%3D%22${id}%22%20and%20_ownerId%3D%22${user._id}%22&count`) : null
    ]);

    let isOwner = null;

    if (user) {
        isOwner = user._id == book._ownerId;
    }

    let showLikeButton = isOwner == false && hasLike == false && user != null;

    return detailsTemplate(book, isOwner, showLikeButton, likes);
}

async function onDelete() {

    let choice = confirm('Are you sure you want to delete this book?');

        if(choice) {
            await deleteBookById(context.params.id);
            page.redirect('/dashboard');
        }
}

async function onLike() {

    await likeBook(context.params.id);

    page.redirect(`/details/${context.params.id}`);
}