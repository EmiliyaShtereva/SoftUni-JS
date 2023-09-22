async function solution() {
    let mainElement = document.getElementById('main');

    let respone = await fetch('http://localhost:3030/jsonstore/advanced/articles/list');
    let data = await respone.json();

    data.forEach(element => {
        let accordionEl = document.createElement('div');
        let headEL = document.createElement('div');
        let spanEl = document.createElement('span');
        let buttonEl = document.createElement('button');

        let extraEl = document.createElement('div');
        let pEl = document.createElement('p');

        accordionEl.classList.add('accordion');
        headEL.classList.add('head');
        buttonEl.classList.add('button');
        buttonEl.setAttribute('id', `${element._id}`);
        extraEl.classList.add('extra');

        spanEl.textContent = element.title;
        buttonEl.textContent = 'More';
        buttonEl.addEventListener('click', buttonHandler);

        headEL.appendChild(spanEl);
        headEL.appendChild(buttonEl);
        extraEl.appendChild(pEl);
        accordionEl.appendChild(headEL);
        accordionEl.appendChild(extraEl);
        mainElement.appendChild(accordionEl);
    });
}

async function buttonHandler(e) {
    let button = e.target;
    let extra = button.parentElement.parentElement.children[1];

    if (button.textContent === 'More') {
        button.textContent = 'Less';
        extra.style.display = 'inline';

        let id = button.id;
        let respone = await fetch(`http://localhost:3030/jsonstore/advanced/articles/details/${id}`);
        let data = await respone.json();

        extra.children[0].textContent = data.content;
    } else {
        button.textContent = 'More';
        extra.style.display = 'none';
    }

}

solution();