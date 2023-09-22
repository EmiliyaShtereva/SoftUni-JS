function calc() {
    let firstNum = document.getElementById('num1');
    firstNum = Number(firstNum.value);
    let secondNum = document.getElementById('num2');
    secondNum = Number(secondNum.value);
    let sum = document.getElementById('sum');

    sum.value = firstNum + secondNum;
}
