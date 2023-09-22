function sameNums(num) {
    let numAsStr = num.toString();
    let sum = 0;
    let isTheSame = true;
    for (let i = 0; i < numAsStr.length; i++) {
        sum += Number(numAsStr[i]);
        if (numAsStr[0] !== numAsStr[i]) {
            isTheSame = false;
        }
    }

    if (isTheSame) {
        console.log(true);
    } else {
        console.log(false);
    }

    console.log(sum);
}

sameNums(1234)