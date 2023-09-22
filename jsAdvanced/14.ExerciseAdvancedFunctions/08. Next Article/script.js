function getArticleGenerator(articles) {
    let conteiner = document.getElementById('content');
    let ourCopy = articles.slice();

    return function showNext() {
        if (ourCopy[0] !== undefined) {
            const article = document.createElement('article');
            article.innerHTML = ourCopy.shift();
            conteiner.appendChild(article);
        }

        return showNext;
    }
}
