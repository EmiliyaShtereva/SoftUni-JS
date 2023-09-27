const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');
const app = express();
const fs = require('fs/promises');
const PORT = 5555;

let cats = [
    {
        id:0,
        imageUrl: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/12A9B/production/_111434467_gettyimages-1143489763.jpg',
        name: 'Tsunami',
        breed: 'ulichna',
        description: 'Very cute cat1!'
    },
    {
        id:1,
        imageUrl: 'https://cdn.pixabay.com/photo/2015/06/19/14/20/cat-814952_1280.jpg',
        name: 'Pesho',
        breed: 'ulichna',
        description: 'Very cute cat2!'
    },
    {
        id:2,
        imageUrl: 'https://cdn.pixabay.com/photo/2018/08/08/05/12/cat-3591348_1280.jpg',
        name: 'Kosatka',
        breed: 'ulichna',
        description: 'Very cute cat3!'
    },
    {
        id:3,
        imageUrl: 'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg',
        name: 'Darko',
        breed: 'ulichna',
        description: 'Very cute cat4!'
    },
    {
        id:4,
        imageUrl: 'https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_1280.jpg',
        name: 'hina',
        breed: 'ulichna',
        description: 'Very cute cat4!'
    },
]

let breeds = ['Unknown breed', 'Persian cat', 'Cutie', 'ulichna'];

    app.engine('hbs', handlebars.engine({extname: 'hbs'}));
    app.set('view engine', 'hbs');
    app.set('views', 'src/views');


    // app.get('/', (req, res) => {
    //     res.render('');
    // });
        // const imageUrlPattern = /{{imageUrl}}/g;
        // const namePattern =  /{{name}}/g;
        // const breedPattern =  /{{breed}}/g;
        // const descriptionPattern =  /{{description}}/g;
        // const id =  /{{id}}/g;

        // const catTemplate = await fs.readFile('./views/home/catTemplate.html', 'utf-8');
        // const homeHtml = await fs.readFile('./views/home/index.html', 'utf-8');

        // const catHtml = cats.map((cat) => catTemplate
        //     .replace(imageUrlPattern, cat.imageUrl)
        //     .replace(namePattern, cat.name)
        //     .replace(breedPattern, cat.breed)
        //     .replace(descriptionPattern, cat.description)
        //     .replace(id, cat.id)
        // ).join('');

        // const homeHtmlTemplate = homeHtml.replace('{{cats}}', catHtml);

        // res.writeHead(200, { 'Content-Type': 'text/html' });
        // res.write(homeHtmlTemplate);

    

    // } else if (url === '/content/styles/site.css') {
    //     const siteCss = await fs.readFile('./content/styles/site.css', 'utf-8');
    //     res.writeHead(200, { 'Content-Type': 'text/css' });
    //     res.write(siteCss);
    // } else if (url === '/cats/add-breed' && method === 'GET') {
    //     const addBreedHtml = await fs.readFile('./views/addBreed.html', 'utf-8');
    //     res.writeHead(200, { 'Content-Type': 'text/html' });
    //     res.write(addBreedHtml);
    // } else if (url === '/cats/add-cat' && method === 'GET') {
    //     const addCatHtml = await fs.readFile('./views/addCat.html', 'utf-8');
    //     res.writeHead(200, { 'Content-Type': 'text/html' });
    //     res.write(addCatHtml);
    // } else if (url.includes('/cats-edit') && method === 'GET') {
    //     const editCatHtml = await fs.readFile('./views/editCat.html', 'utf-8');
    //     res.writeHead(200, { 'Content-Type': 'text/html' });
    //     res.write(editCatHtml);
    // } else if (url.includes('/cats-find-new-home') && method === 'GET') {
    //     const catShelterHtml = await fs.readFile('./views/catShelter.html', 'utf-8');
    //     res.writeHead(200, { 'Content-Type': 'text/html' });
    //     res.write(catShelterHtml);
    // } else if (url === '/cats/add-breed' && method === 'POST') {
    //     let body = '';
    //     req.on('data', chunk => body += chunk);
    //     req.on('end', () => {
    //         const pattern = /[a-zA-z]+/g;
    //         const newData = body.match(pattern).splice(1);
    //         let breed = newData.join(' ');
    //         if (!breeds.includes(breed)) {
    //             breeds.push(breed);
    //         }
    //     })
    //     res.writeHead(304, { location: '/' });
    // }
    // res.end();

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));