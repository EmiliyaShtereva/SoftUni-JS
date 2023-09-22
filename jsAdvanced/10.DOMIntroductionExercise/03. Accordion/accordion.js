function toggle() {
    let buttonText = document.getElementsByClassName('button')[0];
    let text = document.getElementById('extra');

    if (text.style.display === 'none') {
        text.style.display = 'block';
        buttonText.textContent = 'Less';
    } else {
        text.style.display = 'none';
        buttonText.textContent = 'More';
    }
}