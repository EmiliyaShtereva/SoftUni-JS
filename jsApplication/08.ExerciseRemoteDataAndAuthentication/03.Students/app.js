window.addEventListener('load', getData);
document.querySelector('form').addEventListener('submit', submitdata);

let url = 'http://localhost:3030/jsonstore/collections/students';
let results = document.querySelector('tbody');

async function getData() {
    let response = await fetch(url);
    let data = await response.json();

    Object.values(data).forEach(studentInfo => {
        let tr = document.createElement('tr');

        createTh(studentInfo.firstName, tr);
        createTh(studentInfo.lastName, tr);
        createTh(studentInfo.facultyNumber, tr);
        createTh(studentInfo.grade, tr);

        results.appendChild(tr);
    })
}

async function submitdata(e) {
    e.preventDefault();
    let formData = new FormData(e.target);
    let fName = formData.get('firstName');
    let lName = formData.get('lastName');
    let fNum = formData.get('facultyNumber');
    let grade = formData.get('grade');

    if (![fName, lName, fNum, grade].some(el => el === '')) {
        let settings = {
            method: 'Post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                firstName: fName,
                lastName: lName,
                facultyNumber: fNum,
                grade: grade
            })
        }
        await fetch(url, settings);
        results.innerHTML = '';
        getData();
    }
}

function createTh(text, tr) {
    let th = document.createElement('th');
    th.textContent = text;
    tr.appendChild(th);
}
