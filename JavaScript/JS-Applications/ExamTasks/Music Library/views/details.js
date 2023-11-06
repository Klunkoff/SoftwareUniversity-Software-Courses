import { deleteAlbumById, getAlbumById, getLikesAlbumById, getMyLikesAlbumById, likeAlbum } from "../data.js";
import { render, html, nothing } from "../node_modules/lit-html/lit-html.js";
import page from "../node_modules/page/page.mjs";

const mainElement = document.getElementById('site-content');

let context = null;

export async function showDetails(ctx) {

    context = ctx;

    let result = await loadDetails(ctx.params.id);
    render(result, mainElement);
}

let detailsTemplate = (album, isOwner, showLikeButton, likes) => { 

   let template = html`
   <section id="details">
        <div id="details-wrapper">
          <p id="details-title">Album Details</p>
          <div id="img-wrapper">
            <img src="${album.imageUrl}" alt="example1" />
          </div>
          <div id="info-wrapper">
            <p><strong>Band:</strong><span id="details-singer">${album.singer}</span></p>
            <p>
              <strong>Album name:</strong><span id="details-album">${album.album}</span>
            </p>
            <p><strong>Release date:</strong><span id="details-release">${album.release}</span></p>
            <p><strong>Label:</strong><span id="details-label">${album.label}</span></p>
            <p><strong>Sales:</strong><span id="details-sales">${album.sales}</span></p>
          </div>
          <div id="likes">Likes: <span id="likes-count">${likes}</span></div>

          <!--Edit and Delete are only for creator-->
          <div id="action-buttons">
            ${ showLikeButton ? html`<a @click=${onLike} href="#" id="like-btn">Like</a>` : nothing }
            
            ${ isOwner ? html`
            <a href="/edit/${album._id}" id="edit-btn">Edit</a> 
            <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>` : nothing }
            
          </div>
        </div>
      </section>`;
        
        return template;
        
    };

async function loadDetails(id) {

    let user = JSON.parse(localStorage.getItem('user'));

    let [album, likes, hasLike] = await Promise.all([
        getAlbumById(id), 
        getLikesAlbumById(`?where=albumId%3D%22${id}%22&distinct=_ownerId&count`),
        user ? getMyLikesAlbumById(`?where=albumId%3D%22${id}%22%20and%20_ownerId%3D%22${user._id}%22&count`) : null
    ]);

    let isOwner = null;

    if (user) {
        isOwner = user._id == album._ownerId;
    }

    let showLikeButton = isOwner == false && hasLike == false && user != null;

    return detailsTemplate(album, isOwner, showLikeButton, likes);
}

async function onDelete() {

    let choice = confirm('Are you sure you want to delete this album?');

        if(choice) {
            await deleteAlbumById(context.params.id);
            page.redirect('/dashboard');
        }
}

async function onLike() {

    await likeAlbum(context.params.id);

    page.redirect(`/details/${context.params.id}`);
}