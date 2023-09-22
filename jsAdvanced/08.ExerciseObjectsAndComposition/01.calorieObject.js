function calorieObj(arr) {
    let obj = {};
    for (let i = 0; i < arr.length; i += 2) {
        let product = arr[i];
        let calories = Number(arr[i + 1]);
        obj[product] = calories;
    }
    console.log(obj)
}

calorieObj(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])