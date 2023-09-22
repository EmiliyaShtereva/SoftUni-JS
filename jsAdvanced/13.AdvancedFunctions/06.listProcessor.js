function listProcessor(arr) {
    let newArr = [];
    for (let el of arr) {
        let [key, value] = el.split(' ');
        switch(key) {
            case 'add': 
                newArr.push(value);
            break;
            case 'remove': 
                newArr.splice(newArr.indexOf(value), 1);
            break;
            case 'print': 
                console.log(newArr.join(','));
            break;
        }
    }
}

listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']);
listProcessor(['add pesho', 'add george', 'add peter', 'remove peter','print']);