function deleteByEmail() {
    let emails = document.querySelectorAll('#customers tr td:nth-child(2)');
    let emailForDeletion = document.getElementsByName('email')[0].value;
    let result = document.getElementById('result');

    for (let td of emails) {
        if (td.textContent === emailForDeletion) {
            let row = td.parentNode;
            row.parentNode.removeChild(row);
            result.textContent = 'Deleted.';
        } else {
            result.textContent = 'Not found.';
        }
    }
}