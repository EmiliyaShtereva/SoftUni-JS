function sortingArr(arr) {
    let newArr = [];
    arr.sort((a, b) => a - b);
    while (arr.length > 1) {
        newArr.push(arr.shift());
        newArr.push(arr.pop());
    }

    if (arr.length === 1) {
        newArr.push(arr.pop());
    }
    return newArr;
}

sortingArr([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);