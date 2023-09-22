function extractFromArr(arr) {
   let biggest = arr[0];

   let result = arr.filter(x => {
    if (x >= biggest) {
        biggest = x;
        return true;
    } else {
        return false;
    }
   })
   console.log(result);
}

extractFromArr([1,
    3,
    8,
    4,10,
    12,
    3,
    2,
    24])