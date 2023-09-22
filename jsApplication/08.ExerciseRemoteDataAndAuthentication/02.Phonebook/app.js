function attachEvents() {
    let phonebookList = document.getElementById('phonebook');
    let personInput = document.getElementById('person');
    let phoneInput = document.getElementById('phone');
    let loadBtn = document.getElementById('btnLoad');
    let createBtn = document.getElementById('btnCreate');

    loadBtn.addEventListener('click', loadHandler);
    createBtn.addEventListener('click', createHandler);
    let url = 'http://localhost:3030/jsonstore/phonebook'

    async function loadHandler(e) {
        [...phonebookList.children].forEach(c => c.remove());
        let response = await fetch(url);
        let data = await response.json();
        
        Object.entries(data).forEach(([key, value]) => {
            let li = createList(value._id, value.person, value.phone);
            phonebookList.appendChild(li);
        })
    }

    async function createHandler(e) {
        let settings = {
            method: 'Post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                person: personInput.value,
                phone: phoneInput.value
            })
        }
        await fetch(url, settings);

        personInput.value = '';
        phoneInput.value = '';
        
        await loadHandler();
    }

    function createList(id, person, phone) {
        let liEl = document.createElement('li');
        liEl.textContent = `${person}: ${phone}`;

        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.dataset.id = id;
        deleteBtn.addEventListener('click', deleteHandler);

        liEl.appendChild(deleteBtn);
        return liEl;
    } 

    async function deleteHandler(e) {
        let deleteButton = e.target;
        let id = deleteButton.dataset.id;

        let url2 = url + `/${id}`;
        let settings = {
            method: 'Delete'
        };

        let response = await fetch(url2, settings);
        let result = await response.json();
        await loadHandler();
        console.log(result);
    }
}

attachEvents();