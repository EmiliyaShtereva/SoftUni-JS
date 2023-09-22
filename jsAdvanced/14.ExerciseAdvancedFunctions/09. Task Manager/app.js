function solve() {
    let taskElement = document.querySelector('#task');
    let descriptionElement = document.querySelector('#description');
    let dateElement = document.querySelector('#date');
    let addButtonElement = document.querySelector('#add');
    let open = document
        .querySelectorAll('section')[1]
        .querySelectorAll('div')[1];
    let inProgress = document
        .querySelectorAll('section')[2]
        .querySelectorAll('div')[1];
    let complete = document
        .querySelectorAll('section')[3]
        .querySelectorAll('div')[1];

    addButtonElement.addEventListener('click', onClick);

    function onClick(e) {
        e.preventDefault();
        const taskInput = taskElement.value;
        const descriptionInput = descriptionElement.value;
        const dateInput = dateElement.value;
        const isInvalid = !taskInput && !dateInput && !descriptionInput;

        if (isInvalid) return;

        createArticle('open', 'green', 'red', taskInput, descriptionInput, dateInput);

        taskElement.value = '';
        descriptionElement.value = '';
        dateElement.value = '';

    }

    function createArticle(tabType, firstBtnClass, secondBtnClass, task, description, date) {
        let newArticleElement = document.createElement('article');
        let h3Element = document.createElement('h3');
        h3Element.textContent = task;
        let descriptionParaElement = document.createElement('p');
        descriptionParaElement.textContent = `Description: ${description}`;
        let dateParaElement = document.createElement('p');
        dateParaElement.textContent = `Due Date: ${date}`;

        newArticleElement.appendChild(h3Element);
        newArticleElement.appendChild(descriptionParaElement);
        newArticleElement.appendChild(dateParaElement);

        if (tabType === 'open') {
            const btnsDivElement = document.createElement('div');
            btnsDivElement.className = 'flex';

            const startBtn = document.createElement('button');
            startBtn.textContent = 'Start';
            startBtn.className = firstBtnClass;
            startBtn.addEventListener('click', () => {
                removeArticle(newArticleElement);
                createArticle('In Progress', 'red', 'orange', task, description, date);
            });

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.className = secondBtnClass;
            deleteBtn.addEventListener('click', () => {
                removeArticle(newArticleElement);
            });

            btnsDivElement.appendChild(startBtn);
            btnsDivElement.appendChild(deleteBtn);
            newArticleElement.appendChild(btnsDivElement);
            open.appendChild(newArticleElement);

        } else if (tabType === 'In Progress') {
            const btnsDivElement = document.createElement('div');
            btnsDivElement.className = 'flex';
            
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.className = firstBtnClass;
            deleteBtn.addEventListener('click', () => {
                removeArticle(newArticleElement);
            });

            const finishBtn = document.createElement('button');
            finishBtn.textContent = 'Finish';
            finishBtn.className = secondBtnClass;
            finishBtn.addEventListener('click', () => {
                removeArticle(newArticleElement);
                createArticle('Complete', null, null, task, deleteBtn, date);
            });

            btnsDivElement.appendChild(deleteBtn);
            btnsDivElement.appendChild(finishBtn);
            newArticleElement.appendChild(btnsDivElement);
            inProgress.appendChild(newArticleElement);

        } else if (tabType === 'Complete') {
            complete.appendChild(newArticleElement);
        }
    }

    function removeArticle(article) {
        article.remove();
    }

}