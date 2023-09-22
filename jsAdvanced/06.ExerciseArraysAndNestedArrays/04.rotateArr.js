function rotateArr(arr, num) {
    for (let i = 0; i < num; i++) {
        let poped = arr.pop();
        arr.unshift(poped);
    }
    console.log(arr.join(' '));
}

rotateArr(['1',
'2',
'3',
'4'],
2)