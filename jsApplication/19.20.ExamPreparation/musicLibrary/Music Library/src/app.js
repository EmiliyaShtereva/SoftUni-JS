import { render } from "../node_modules/lit-html/lit-html.js";
import page from "../node_modules/page/page.mjs";
import { CreateComponent } from "./components/create/create.js";
import { createTemplate } from "./components/create/createTemplate.js";
import { DashboardComponent } from "./components/dashboard/dashboard.js";
import { dashboardTemplate } from "./components/dashboard/dashboardTemplate.js";
import { DetailsComponent } from "./components/details/details.js";
import { detailsTemplate } from "./components/details/detailsTemplate.js";
import { EditComponent } from "./components/edit/edit.js";
import { editTemplate } from "./components/edit/editTemplate.js";
import { HomeComponent } from "./components/home/home.js";
import { homeTemplate } from "./components/home/homeTemplate.js";
import { LoginComponent } from "./components/login/login.js";
import { loginTemplate } from "./components/login/loginTemplate.js";
import { NavComponent } from "./components/nav/nav.js";
import { navTemplate } from "./components/nav/navTemplate.js";
import { RegisterComponent } from "./components/register/register.js";
import { registerTemplate } from "./components/register/registerTemplate.js";
import { AuthService } from "./services/AuthService.js";
import { BaseCrudApiService } from "./services/BaseCrudApiService.js";
import { SessionService } from "./services/SessionService.js";

const main = document.querySelector('#wrapper main');
const nav = document.querySelector('#wrapper header');

let router = {
    navigate: page.show,
    redirect: page.redirect
}

const baseUrl = 'http://localhost:3030';

let renderBody = (template) => render(template, main);
let renderNav = (template) => render(template, nav);

let sessionService = new SessionService();
let authService = new AuthService(baseUrl, sessionService);
let albumsService = new BaseCrudApiService(baseUrl, '/data/albums', sessionService);

let navComponent = new NavComponent(authService, renderNav, navTemplate, router);
let homeComponent = new HomeComponent(renderBody, homeTemplate);
let loginComponent = new LoginComponent(authService, renderBody, loginTemplate, router);
let registerComponent = new RegisterComponent(authService, renderBody, registerTemplate, router);
let dashboardComponents = new DashboardComponent(albumsService, renderBody, dashboardTemplate);
let createComponent = new CreateComponent(albumsService, renderBody, createTemplate, router);
let detailsComponent = new DetailsComponent(authService, albumsService, renderBody, detailsTemplate, router);
let editComponent = new EditComponent(albumsService, renderBody, editTemplate, router)


page('/index.html', '/');
page(navComponent.showView);

page('/', homeComponent.showView);
page('/login', loginComponent.showView);
page('/register', registerComponent.showView);
page('/dashboard', dashboardComponents.showView);
page('/create', createComponent.showView);
page('/details/:id', detailsComponent.showView);
page('/edit/:id', editComponent.showView);
page.start();