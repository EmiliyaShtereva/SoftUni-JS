function lockedProfile() {
    const SHOW_MORE = 'Show more';
    const HIDE_IT = 'Hide it';

    const btnElement = Array.from(document.querySelectorAll('div button'));

    for (const btn of btnElement) {
        btn.addEventListener('click', show);
    }

    function show(e) {
        const divChildren = Array.from(e.target.parentElement.children);
        const isLocked = divChildren[2].checked;

        if (isLocked) {
            return;
        }

        const hiddenFieldElements = e.target.previousElementSibling;

        if (e.target.textContent === SHOW_MORE) {
            hiddenFieldElements.style.display = 'inline';
            e.target.textContent = HIDE_IT;
        } else {
            hiddenFieldElements.style.display = 'none';
            e.target.textContent = SHOW_MORE;
        }
    }
}