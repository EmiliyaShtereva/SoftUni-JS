function sortAnArr(arr) {
    arr.sort((a, b) => a.localeCompare(b));
    // let newArr = [...arr];
    arr.sort((a, b) => a.length - b.length );
    console.log(arr.join('\n'));
}

sortAnArr(['Isacc',
'Theodor','Jack',
'Harrison',
'George'])