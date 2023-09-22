function sumTable() {
    let rows = document.querySelectorAll('tr');
    let total = 0;
    for (let i = 1; i < rows.length; i++) {
        let cols = rows[i].children;
        let cost = cols[1].textContent;
        total += Number(cost);
    }
    document.getElementById('sum').textContent = total;
}