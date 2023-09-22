function squareOfStars(num) {
    let inputType = typeof(num);
    if (inputType === 'number') {
        for (let i = 0; i < num; i++) {
            let row = [];
            for (let i = 0; i < num; i++) {
                row.push('*');
            } 
            console.log(row.join(' '));
        } 
    } else {
        for (let i = 0; i < 5; i++) {
            let row = [];
            for (let i = 0; i < num; i++) {
                row.push('*');
            } 
            console.log(row.join(' '));
        }  
    }
}
squareOfStars(3)