function focused() {
    let inputs = document.querySelectorAll('input');
    let inputsArr = Array.from(inputs);

    inputsArr.forEach(x => {
        x.addEventListener('focus', focusHandler);
        x.addEventListener('blur', blurHandler);
    });

    function focusHandler(e) {
        let element = e.target;
        let div = element.parentElement;
        div.classList.add('focused');
    }

    function blurHandler(e) {
        let element = e.target;
        let div = element.parentElement;
        div.classList.remove('focused');
    }
}