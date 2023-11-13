import { deletePetById, donationPet, getDonationsPetById, getMyDonationsPetById, getPetById } from "../data.js";
import { render, html, nothing } from "../node_modules/lit-html/lit-html.js";
import page from "../node_modules/page/page.mjs";

const mainElement = document.getElementById('content');

let context = null;

export async function showDetails(ctx) {

    context = ctx;

    let result = await loadDetails(ctx.params.id);
    render(result, mainElement);
}

let detailsTemplate = (pet, isOwner, showDonationButton, donations, user) => {

    let template = html`
    <section id="detailsPage">
            <div class="details">
                <div class="animalPic">
                    <img src="${pet.image}">
                </div>
                <div>
                    <div class="animalInfo">
                        <h1>Name: ${pet.name}</h1>
                        <h3>Breed: ${pet.breed}</h3>
                        <h4>Age: ${pet.age}</h4>
                        <h4>Weight: ${pet.weight}</h4>
                        <h4 class="donation">Donation: ${Number(donations) * 100}$</h4>
                    </div>
                    <!-- if there is no registered user, do not display div-->

                    ${user ? html `<div class="actionBtn">

                        <!-- Only for registered user and creator of the pets-->

                        ${isOwner ? html`
                        <a href="/edit/${pet._id}" class="edit">Edit</a>
                        <a @click=${onDelete} href="javascript:void(0)" class="remove">Delete</a>` : nothing }
                    
                        <!--(Bonus Part) Only for no creator and user-->

                        ${showDonationButton ? html`
                        <a @click=${onDonation} href="#" class="donate">Donate</a>` : nothing}

                    </div>` : nothing }
                </div>
            </div>
        </section>`;

    return template;

};

async function loadDetails(id) {

    let user = JSON.parse(localStorage.getItem('user'));

    let [pet, donations, hasDonation] = await Promise.all([
        getPetById(id),
        getDonationsPetById(`?where=petId%3D%22${id}%22&distinct=_ownerId&count`),
        user ? getMyDonationsPetById(`?where=petId%3D%22${id}%22%20and%20_ownerId%3D%22${user._id}%22&count`) : null
    ]);

    let isOwner = null;

    if (user) {
        isOwner = user._id == pet._ownerId;
    }

    let showDonationButton = isOwner == false && hasDonation == 0 && user != null;

    return detailsTemplate(pet, isOwner, showDonationButton, donations, user);
}

async function onDelete() {

    let choice = confirm('Are you sure you want to delete this pet?');

    if (choice) {
        await deletePetById(context.params.id);
        page.redirect('/home');
    }
}

async function onDonation() {

    await donationPet(context.params.id);

    page.redirect(`/details/${context.params.id}`);
}


