import { html } from "../../../node_modules/lit-html/lit-html.js";
import { shoeTemplate } from "../share/shoeTemplate.js";


export const dashboardTemplate = (shoes) => html`
<section id="dashboard">
    <h2>Collectibles</h2>
    ${shoes.length > 0
        ? html`
        <ul class="card-wrapper">
            ${shoes.map(s => shoeTemplate(s, true))}
        </ul>`
        : html`<h2>There are no items added yet.</h2>`
    }
  </section>`