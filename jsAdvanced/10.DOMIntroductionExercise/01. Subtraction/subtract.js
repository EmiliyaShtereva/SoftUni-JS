function subtract() {
    let firstNum = document.getElementById('firstNumber');
    firstNum = Number(firstNum.value);
    let secondNum = document.getElementById('secondNumber');
    secondNum = Number(secondNum.value);
    let subtract = document.getElementById('result');

    subtract.textContent = firstNum - secondNum;
}