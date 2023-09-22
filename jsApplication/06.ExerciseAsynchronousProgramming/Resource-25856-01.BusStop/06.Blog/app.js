async function attachEvents() {
    let loadBtn = document.getElementById('btnLoadPosts');
    let viewBtn = document.getElementById('btnViewPost');
    let allPosts = document.getElementById('posts');
    let postTitle = document.getElementById('post-title');
    let postBody = document.getElementById('post-body');
    let postComents = document.getElementById('post-comments');

    loadBtn.addEventListener('click', loadHandler);
    viewBtn.addEventListener('click', viewHandler);

    let bodyInfo = {};

    async function loadHandler() {
        let postsResponse = await fetch('http://localhost:3030/jsonstore/blog/posts');
        let postsData = await postsResponse.json();

        for (const [key, objBody] of Object.entries(postsData)) {
            bodyInfo[key] = objBody.body;
            let optionEl = document.createElement('option');
            optionEl.setAttribute('value', key);
            optionEl.textContent = objBody.title;
            allPosts.appendChild(optionEl);
        }
    }

    async function viewHandler() {
        let selectedOption = allPosts.options[allPosts.selectedIndex];

        let viewResponse = await fetch(`http://localhost:3030/jsonstore/blog/comments`);
        let viewData = await viewResponse.json();

        postTitle.textContent = selectedOption.textContent;

        for (const [key, value] of Object.entries(bodyInfo)) {
            if (key == selectedOption.value) {
                postBody.textContent = value;
            }
        }

        let id = '';
        for (const [key, objBody] of Object.entries(viewData)) {
            if (objBody.postId == selectedOption.value) {
                id = key;
            }
        }
        let response = await fetch(`http://localhost:3030/jsonstore/blog/comments/${id}`);
        let data = await response.json();

        let liEl = document.createElement('li');
        liEl.textContent = data.text;
        postComents.appendChild(liEl);
    }
}


attachEvents();