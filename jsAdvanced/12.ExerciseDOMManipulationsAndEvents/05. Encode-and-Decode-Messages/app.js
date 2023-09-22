function encodeAndDecodeMessages() {
    const [encodeBtn, decodeBtn] = Array.from(document.querySelectorAll('#main button'));
    const textContainer = Array.from(document.querySelectorAll('#main textarea'));

    encodeBtn.addEventListener('click', encodeAndSend);
    decodeBtn.addEventListener('click', decodeAndRead);

    function transformText(text, callback) {
        return text.split('').map(callback).join('');
    }

    function nextChar(char) {
        return String.fromCharCode(char.charCodeAt(0) + 1);
    }

    function prevChar(char) {
        return String.fromCharCode(char.charCodeAt(0) - 1);
    }

    function encodeAndSend(e) {
        textContainer[1].value = transformText(textContainer[0].value, nextChar);
        textContainer[0].value = '';
    }

    function decodeAndRead(e) {
        textContainer[1].value = transformText(textContainer[1].value, prevChar);
    }
}