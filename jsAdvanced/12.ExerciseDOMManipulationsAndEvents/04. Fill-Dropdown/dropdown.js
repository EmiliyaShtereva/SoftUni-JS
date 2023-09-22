function addItem() {
    let inputText = document.getElementById('newItemText');
    let  inputValue = document.getElementById('newItemValue');
    const menu = document.getElementById('menu');

    let newOption = document.createElement('option');

    newOption.textContent = inputText.value;
    newOption.value = inputValue.value;

    menu.appendChild(newOption);

    inputText.value = '';
    inputValue.value = '';
}