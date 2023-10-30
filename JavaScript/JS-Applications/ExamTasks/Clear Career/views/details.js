import { deleteOfferById, applyOffer, getApplicationsOfferById, getMyApplicationsOfferById, getOfferById } from "../data.js";
import { render, html, nothing } from "../node_modules/lit-html/lit-html.js";
import page from "../node_modules/page/page.mjs";

const mainElement = document.getElementById('content');

let context = null;

export async function showDetails(ctx) {

    context = ctx;

    let result = await loadDetails(ctx.params.id);
    render(result, mainElement);
}

let detailsTemplate = (offer, isOwner, showApplyButton, applications, user) => {

    let template = html`
    <section id="details">
          <div id="details-wrapper">
            <img id="details-img" src="${offer.imageUrl}" alt="example1" />
            <p id="details-title">${offer.title}</p>
            <p id="details-category">
              Category: <span id="categories">${offer.category}</span>
            </p>
            <p id="details-salary">
              Salary: <span id="salary-number">${offer.salary}</span>
            </p>
            <div id="info-wrapper">
              <div id="details-description">
                <h4>Description</h4>
                <span
                  >${offer.description}</span
                >
              </div>
              <div id="details-requirements">
                <h4>Requirements</h4>
                <span
                  >${offer.requirements}</span
                >
              </div>
            </div>
            <p>Applications: <strong id="applications">${applications}</strong></p>

            ${user ? html `<div id="action-buttons">

                        <!--Edit and Delete are only for creator-->

                        ${isOwner ? html`
                        <a href="/edit/${offer._id}" id="edit-btn">Edit</a>
                        <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>` : nothing }
                    
                        <!--Bonus - Only for logged-in users ( not authors )-->

                        ${showApplyButton ? html`
                        <a @click=${onApply} href="#" id="apply-btn">Apply</a>` : nothing}

                    </div>` : nothing }
            
          </div>
        </section>`;

    return template;

};

async function loadDetails(id) {

    let user = JSON.parse(localStorage.getItem('user'));

    let [offer, applications, hasApplication] = await Promise.all([
        getOfferById(id),
        getApplicationsOfferById(`?where=offerId%3D%22${id}%22&distinct=_ownerId&count`),
        user ? getMyApplicationsOfferById(`?where=offerId%3D%22${id}%22%20and%20_ownerId%3D%22${user._id}%22&count`) : null
    ]);

    let isOwner = null;

    if (user) {
        isOwner = user._id == offer._ownerId;
    }

    let showApplyButton = isOwner == false && hasApplication == 0 && user != null;

    return detailsTemplate(offer, isOwner, showApplyButton, applications, user);
}

async function onDelete() {

    let choice = confirm('Are you sure you want to delete this offer?');

    if (choice) {
        await deleteOfferById(context.params.id);
        page.redirect('/dashboard');
    }
}

async function onApply() {

    await applyOffer(context.params.id);

    page.redirect(`/details/${context.params.id}`);
}

