function wordsUppercase(str) {
    let regex = /[A-Za-z0-9]+/g;
    let validWords = str.match(regex);
    let uppercaseWords = []
    for (word of validWords) {
        uppercaseWords.push(word.toUpperCase());
    }
    console.log(uppercaseWords.join(", "));
}
wordsUppercase('Hi, how are you?');