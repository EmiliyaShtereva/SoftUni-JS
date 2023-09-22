import page from './node_modules/page/page.mjs';
let nav = document.querySelector('nav');
let main = document.querySelector('main');
let createbtn = document.getElementById('createbtn');

createbtn.addEventListener('click', () => page('/create'))

// nav.addEventListener('click', (e) => {
//     if (e.target.tagName === 'A') {
//         e.preventDefault();
//         let address = e.target.href;
//         let url = new URL(address)

//         history.pushState({}, '', url.pathname);
//         navigate();
//     }
// })

page('/index.html', '/');



page ('/', () => main.innerHTML = '<h2>Home</h2>');
page ('/catalog', () => main.innerHTML = '<h2>Catalog</h2>');
page ('/catalog/:id', decorationUser, showProduct);
page ('/create', () => main.innerHTML = '<h2>Create</h2>');
page('*', () => main.innerHTML = '<h2>404 not found</h2>');
page.start();

let views = {
    '/home': '<h2>Home</h2>',
    '/catalog': '<h2>Catalog</h2>',
    '/create': '<h2>Create</h2>',
}

function decorationUser(ctx, next) {
    let user = 'user1';
    ctx.user = user;
    console.log(ctx);
    next();
}

function showProduct(ctx, next) {
    // console.log(ctx)
    let id = ctx.params.id;
    console.log(id)
    main.innerHTML = `<h2>Catalog</h2><h3>product ${id}</h3>`;
}