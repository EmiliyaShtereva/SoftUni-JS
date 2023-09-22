function lastKNumbersSequence(n, k) {
    let numK = Number(k);
    let numN = Number(n);
    let arr = [1];
    for (let i = 1; i < numN; i++) {
        let kNum = Math.max(arr.length - numK, 0);
        let sum = 0;
        let currNum = arr.slice(kNum);
        for (let j = 0; j < currNum.length; j++) {
            sum += currNum[j];
        }
        arr.push(sum);
    }
    console.log(arr);
}
lastKNumbersSequence(6, 3)