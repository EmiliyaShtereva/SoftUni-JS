function attachEvents() {
    let textArea = document.getElementById('messages');
    let nameInput = document.querySelector('input[name="author"]');
    let messageInput = document.querySelector('input[name="content"]');
    let sendBtn = document.getElementById('submit');
    let refreshBtn = document.getElementById('refresh');

    let url = 'http://localhost:3030/jsonstore/messenger';

    sendBtn.addEventListener('click', sendHandler);
    refreshBtn.addEventListener('click', refreshHandler);

    async function sendHandler(e) {
        let settings = {
            method: "Post",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                author: nameInput.value,
                content: messageInput.value
            })
        }

        await fetch(url, settings);
    }

    async function refreshHandler(e) {
        let response = await fetch(url);
        let data = await response.json();
        let messages = [];
        
        for (let [key, value] of Object.entries(data)) {
            messages.push(`${value.author}: ${value.content}`)
        }

        textArea.textContent = messages.join('\n');
    }
}

attachEvents();