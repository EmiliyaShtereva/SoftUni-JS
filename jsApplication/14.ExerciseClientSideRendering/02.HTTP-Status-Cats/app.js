import { cats } from "./catSeeder.js";
import { html, render } from "./node_modules/lit-html/lit-html.js";

let allCats = document.getElementById('allCats');


let liTemplate = (cats, showHandler) => html`
<li>
    <img src="./images/${cats.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
    <div class="info">
        <button class="showBtn" @click=${(e) => showHandler(e)}>Show status code</button>
        <div class="status" style="display: none" id="${cats.id}">
            <h4>Status Code: ${cats.statusCode}</h4>
            <p>${cats.statusMessage}</p>
        </div>
    </div>
</li>`;

let ulTemplate = (cats, showHandler) => html`
<ul>
    ${cats.map(x => liTemplate(x, showHandler))}
</ul>`;

render(ulTemplate(cats, showHandler), allCats);

function showHandler(e) {
    let element = e.target;
    let details = element.parentElement.parentElement.querySelector('.status');
    if (details.style.display == 'none') {
        element.textContent = 'Hide status code';
        details.style.display = 'block'
    } else {
        element.textContent = 'Show status code'
        details.style.display = 'none'
    }
}