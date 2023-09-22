const fs = require('fs');

const text = 'Sleeping is training before death';
fs.writeFile('./output.txt', text, 'utf-8', (err) => {
    if (err) {
        console.log('Did not work');
        return;
    }

    console.log('Worked');
});
