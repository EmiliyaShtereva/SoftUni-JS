import { render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
import { Nav } from './views/nav/nav.js';
import { AuthDataService } from './services/authDataService.js';
import { AuthServise } from './services/authService.js';

import { RecipeService } from './services/recipeService.js';
import { CatalogPage } from './views/catalog/catalogPage.js';
import { catalogPageTemplate } from './views/catalog/catalogTempalte.js';
import { LoginPage } from './views/login/loginPage.js';
import { loginTemplate } from './views/login/loginTemplate.js';
import { navTemplate } from './views/nav/navTemplate.js';
import { DetailsPage } from './views/details/detailsPage.js';
import { detailsTemplate } from './views/details/detailsTemplate.js';
import { RegisterPage } from './views/register/registerPage.js';
import { registerTemplate } from './views/register/registerTemplate.js';
import { Modal } from './views/modal/modal.js';
// import { showCreateRecipe } from './views/createRecipePage.js';
// import { showEditPage } from './views/editRecipePage.js';
// import { showLogin } from './views/loginPage.js';
// import { showRegister } from './views/registerPage.js';

const main = document.querySelector('main');
const nav = document.querySelector('nav');
const modal = document.getElementById('modal');

let baseUrl = 'http://localhost:3030';

// render handler
let renderBody = (template) => render(template, main);
let renderNav = (template) => render(template, nav);
let renderModal = (template) => render(template, modal);

// services
const authDataService = new AuthDataService();
const authService = new AuthServise(baseUrl, authDataService);
const recipeService = new RecipeService(baseUrl, authDataService);
const modalService = new Modal(renderModal);

// component
let catalogPage = new CatalogPage(recipeService, catalogPageTemplate, renderBody, page.show, modalService);
let loginPage = new LoginPage(authService, loginTemplate, renderBody, page.show);
let navView = new Nav(authService, page.redirect, navTemplate, renderNav);
let detailsPage = new DetailsPage(recipeService, detailsTemplate, renderBody, page.show);
let registerPage = new RegisterPage(authService, registerTemplate, renderBody, page.show);
// let catalogPage = new CatalogPage(recipeService, catalogPageTemplate, renderBody, page.show);

page('/index.html', '/');
page(navView.showNavigation);

page('/detail/:id', detailsPage.showDetail);
// page('/createRecipe', showCreateRecipe);
// page('/editRecipe/:id', showEditPage);
page('/login', loginPage.showLogin);
page('/register', registerPage.showRegister);
page('/', catalogPage.showCatalog);

page.start();
