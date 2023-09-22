function addAndRemoveEl(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case 'add':
                newArr.push(i + 1);
                break;
            case 'remove':
                newArr.pop();
                break;
        }
    }

    if (newArr.length === 0) {
        console.log('Empty')
    } else {
        console.log(newArr.join('\n'))
    }
}

addAndRemoveEl(['add',
'add',
'remove',
'add',
'add'])