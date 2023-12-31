function magicMatrix(input) {
    let isMagic = true;
    let rowsAmount = input.length;
 
    for (let i = 0; i < rowsAmount - 1; i++) {
        let currRowSum = input[i].reduce((a, b) => a + b, 0);
        let nextRowSum = input[i + 1].reduce((a, b) => a + b, 0);
 
        let currColSum = 0;
        let nextColSum = 0;
 
        for (let j = 0; j < rowsAmount; j++) {
            currColSum += input[i][j];
            nextColSum += input[i + 1][j];
        }
 
        if (currRowSum !== nextRowSum || currColSum !== nextColSum) {
            isMagic = false;
            break;
        }
    }
 
    return isMagic;
}

magicMatrix([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]])