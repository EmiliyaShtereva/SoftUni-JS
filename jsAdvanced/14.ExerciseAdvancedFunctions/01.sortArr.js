function sortArr(arr, str) {
    if (str === 'asc') {
        return ascending(arr);
    } else if (str === 'desc') {
        return descending(arr);
    }

    function ascending(array) {
        return array.sort((a, b) => a - b);
    }

    function descending(array) {
        return array.sort((a, b) => b - a);
    }
}

sortArr([14, 7, 17, 6, 8], 'asc');
sortArr([14, 7, 17, 6, 8], 'desc')