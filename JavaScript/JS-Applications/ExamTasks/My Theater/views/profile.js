import { getMyTheaters } from "../data.js";
import { render, html } from "../node_modules/lit-html/lit-html.js";

const mainElement = document.getElementById('content');

export async function showMyTheaters() {

    let user = JSON.parse(localStorage.getItem('user'));
    let myTheaters = await getMyTheaters(`?where=_ownerId%3D%22${user._id}%22&sortBy=_createdOn%20desc`);

    render(mainTheatersTemplate(myTheaters, user), mainElement);
}

let mainTheatersTemplate = (myTheaters, user) => {

    let template = html`
<section id="profilePage">
            <div class="userInfo">
                <div class="avatar">
                    <img src="./images/profilePic.png">
                </div>
                <h2>${user.email}</h2>
            </div>
            <div class="board">
        ${myTheaters == 0 
    ? html`<div class="no-events">
                <p>This user has no events yet!</p>
            </div>` 
    : html`${myTheaters.map(theaterTemplate)}`}
    </div>
</section>`;

    return template;
}

let theaterTemplate = (theater) => html`
<div class="eventBoard">
                    <div class="event-info">
                        <img src="${theater.imageUrl}">
                        <h2>${theater.title}</h2>
                        <h6>${theater.date}</h6>
                        <a href="/details/${theater._id}" class="details-button">Details</a>
                    </div>
                </div>`;
