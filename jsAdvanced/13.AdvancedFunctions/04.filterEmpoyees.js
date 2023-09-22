function filter(data, criteria) {
    let employees = JSON.parse(data);
    let [key, value] = criteria.split('-');
    let counter = 0;

    if (value === 'all') {
        for (let i = 0; i < employees.length; i++) {
            let employee = employees[i];
            let index = i;
            let firstName = employee['first_name'];
            let lastName = employee['last_name'];
            let email = employee['email'];
            print(index, firstName, lastName, email);
        }
    } else {
        for (let i = 0; i < employees.length; i++) {
            let employee = employees[i];
            if (employee[key] === value) {
                let index = counter;
                let firstName = employee['first_name'];
                let lastName = employee['last_name'];
                let email = employee['email'];
                print(index, firstName, lastName, email);
                counter++;
            }
        }
    }

    function print(index, firstName, lastName, email) {
        console.log(`${index}. ${firstName} ${lastName} - ${email}`);
    }
}

filter(`[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
    }, {
"id": "2",
"first_name": "Kizzee",
"last_name": "Johnson",
"email": "kjost1@forbes.com",
"gender": "Female"
}, {
"id": "3",
"first_name": "Evanne",
"last_name": "Maldin",
"email": "emaldin2@hostgator.com",
"gender": "Male"
}, {
"id": "4",
"first_name": "Evanne",
"last_name": "Johnson",
"email": "ev2@hostgator.com",
"gender": "Male"
}]`,
'last_name-Johnson')