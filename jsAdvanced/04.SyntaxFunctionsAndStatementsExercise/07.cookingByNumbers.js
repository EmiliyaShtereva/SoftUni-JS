function cooingByNumbers(num, operation1, operation2, operation3, operation4, operation5) {
    let currentNum = Number(num);
    let operations = [operation1, operation2, operation3, operation4, operation5];
    for (let i = 0; i < operations.length; i++) {
        let operation = operations[i];
        switch (operation) {
            case 'chop':
                currentNum /= 2;
                console.log(currentNum);
                break;
            case 'dice':
                currentNum = Math.sqrt(currentNum);
                console.log(currentNum);
                break;
            case 'spice':
                currentNum++;
                console.log(currentNum);
                break;
            case 'bake':
                currentNum *= 3;
                console.log(currentNum);
                break;
            case 'fillet':
                currentNum *= 0.80;
                console.log(currentNum.toFixed(1));
                break;
        }
    }
}
cooingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet')