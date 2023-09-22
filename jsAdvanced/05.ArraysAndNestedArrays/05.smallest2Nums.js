function smallest2Nums(arr) {
    let sortedArr = arr.sort((a,b) => a - b);
    let smallest = sortedArr.splice(0, 2);
    console.log(smallest.join(" "));
}