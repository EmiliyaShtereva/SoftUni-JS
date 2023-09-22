function subSum(arr, startIndex, endIndex) {
    if (Array.isArray(arr) === false) {
        return NaN;
    }

    if (startIndex < 0) {
        startIndex = 0;
    }

    if (endIndex > arr.length - 1) {
        endIndex = arr.length - 1;
    }

    return arr.map(x => Number(x)).reduce((a, c, i) => {
        if (i >= startIndex && i <= endIndex) {
            a += c;
        }
        return a;
    }, 0);
}