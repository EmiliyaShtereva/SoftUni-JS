function editElement(ref, match, replacer) {
    let text = ref.textContent;
    let regex = new RegExp(match, 'g');
    let res = text.replace(regex, replacer);
    ref.textContent = res;
}