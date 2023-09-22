function validate() {
    let emailInput = document.getElementById('email');
    emailInput.addEventListener('change', onChange);

    function onChange(e) {
        let {target} = e;
        let regex = /^[a-z]+@[a-z]+\.[a-z]+$/;

        let operation = regex.test(target.value) ? 'remove' : 'add';
        target.classList[operation]('error');
    }
}