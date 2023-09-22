async function lockedProfile() {
    let mainElement = document.getElementById('main');
    let inputElement = document.querySelectorAll('input');
    let profileElement = document.querySelector('.profile');
    let hiddenDivElement = document.querySelector('.user1Username');

    hiddenDivElement.style.display = 'none';
    mainElement.innerHTML = '';

    fetch('http://localhost:3030/jsonstore/advanced/profiles')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let [radioLock, radioUnlock, userName, _email, _age] = Array.from(inputElement);
            Object.values(data).forEach(p => {
                let {_id, age, email, username} = p;
                userName.value = username;
                _email.value = email;
                _age.value = age;
                radioLock.checked = true;

                let currentDivElement = profileElement.cloneNode(true);
                currentDivElement.addEventListener('click',showMore);
                mainElement.appendChild(currentDivElement);
            });
        });
}

function showMore(e) {
    if (e.target.tagName === 'BUTTON' && !e.target.parentElement.children[2].checked) {
        let hiddenelement = e.target.parentElement.children[9];

        if (hiddenelement.style.display === 'block') {
            hiddenelement.style.display = 'none';
            e.target.innerText = 'Show more';
        } else {
            hiddenelement.style.display = 'block';
            e.target.innerText = 'Hide it';
        }
    }
}