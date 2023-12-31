function loadRepos() {
	let usernameInfo = document.getElementById('username');
	let username = usernameInfo.ariaValueMax;
	let url = `https://api.github.com/users/${username}/repos`;
	let ul = document.getElementById('repos');
	fetch(url)
		.then(response => {
			if (response.status != 200) {
				throw new Error(`${response.status} ${response.statusText}`);
			}
			return response.json();
		})
		.then(data => {
			data.forEach(element => {
				let li = createLi(element.full_name, element.html_url);
				ul.appendChild(li);
			});
		})
		.catch(e => {
			let li = createLi(e.message);
			ul.appendChild(li);
		})
}

function createLi(name, url) {
	let li = document.createElement('li');
	let a = document.createElement('a');
	a.textContent = name;
	a.href = url;
	li.appendChild(a);
	return li;
}