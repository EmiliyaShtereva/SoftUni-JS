import { html } from "../../../node_modules/lit-html/lit-html.js";
import { shoeTemplate } from "../share/shoeTemplate.js";


export const searchTemplate = (shoes, submitHandler, isUserLoggedIn) => html`
<section id="search">
    <h2>Search by Brand</h2>

    <form class="search-wrapper cf" @submit=${submitHandler}>
      <input
        id="#search-input"
        type="text"
        name="search"
        placeholder="Search here..."
        required
      />
      <button type="submit">Search</button>
    </form>

    <h3>Results:</h3>

    <div id="search-container">
      <ul class="card-wrapper">
      ${shoes.length > 0
        ? html`
        <ul class="card-wrapper">
            ${shoes.map(s => shoeTemplate(s, isUserLoggedIn))}
        </ul>`
        : html`<h2>There are no results found.</h2>`
    }
      </ul>
    </div>
  </section>`
