async function loadCommits() {
    let ul = document.getElementById('commits');
    let usernameInput = document.getElementById('username');
    let repoInput = document.getElementById('repo');
    let username = usernameInput.value;
    let repo = repoInput.value;

    let url = `https://api.github.com/repos/${username}/${repo}/commits`;

    let commits = await fetch(url)
        .then(response => {
			if (response.status != 200) {
				throw new Error(`${response.status} ${response.statusText}`);
			}
			return response.json();
		})
        .catch(e => {
			let li = document.createElement('li');
            li.textContent = `Error: ${e.message} (Not Found)`
			ul.appendChild(li);
		})

    Object.values(commits).forEach(c => {
        let li = createLi(c.commit.author.name, c.commit.message);
        ul.appendChild(li);
    })
}

function createLi(author, message) {
	let li = document.createElement('li');
	li.textContent = `${author}: ${message}`;
	return li;
}