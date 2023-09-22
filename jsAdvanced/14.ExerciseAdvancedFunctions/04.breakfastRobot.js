function solution() {
    const SUCCESS = 'Success';

    let elements = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,
    }

    let receipts = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { carbohydrate: 10, protein: 10, fat: 10, flavour: 10 },
    }

    let getError = (element) => `Error: not enough ${element} in stock`

    let commands = {
        restock: (element, quantity) => {
            elements[element] += Number(quantity);
            return SUCCESS;
        },
        prepare: (recipe, quantity) => {
            let missingElementEntry;
            let errorMsg;

            for (let i = 0; i < quantity; i++) {
                missingElementEntry = Object.entries(receipts[recipe]).find(
                    (x) => elements[x[0]] < Number(x[1])
                );

                if (!missingElementEntry) {
                    Object.entries(receipts[recipe]).forEach((x) => {
                        elements[x[0]] -= Number(x[1]);
                    });
                } else {
                    errorMsg = getError(missingElementEntry[0]);
                    break;
                }
            }

            return errorMsg ? errorMsg : SUCCESS
        },
        report: () => {
            return Object.keys(elements)
                .reduce((a, b) => {
                    a.push(`${b}=${elements[b]}`);
                    return a;
                }, [])
                .join(' ');
        },
    };

    return function(cdm) {
        const cdmToken = cdm.split(' ');

        console.log(cdm);
        return cdmToken.length === 1 
        ? commands[cdmToken[0]]() 
        : commands[cdmToken[0]](cdmToken[1], cdmToken[2]);
    };
}



let manager = solution();
console.log(manager("restock flavour 50")); // Success
console.log(manager("prepare lemonade 4"));
console.log(manager("restock carbohydrate 10"));
console.log(manager("restock flavour 10"));
console.log(manager("prepare apple 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare burger 1"));
console.log(manager("report"));
console.log('------------------------------------------------')
console.log(manager("prepare turkey 1"));
console.log(manager("restock protein 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("restock carbohydrate 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("restock flavour 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("report"));
