function extractText() {
    let lis = document.getElementsByTagName('li');
    let liArr = Array.from(lis);
    let text = liArr.map(x => x.textContent);
    let textArea = document.getElementById('result');
    textArea.value = text.join('\n');
}