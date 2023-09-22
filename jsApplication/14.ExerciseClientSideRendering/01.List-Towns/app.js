import { html, render } from "../node_modules/lit-html/lit-html.js";

let input = document.getElementById('towns');
document.getElementById('btnLoadTowns').addEventListener('click', btnHandler);
let root = document.getElementById('root');

function btnHandler(e) {
    e.preventDefault();
    let towns = input.value.split(', ');
    let template = (towns) => html`
    <ul>
        ${towns.map((town) => html`<li>${town}</li>`)}
    </ul>`;
    render(template(towns), root);
}


