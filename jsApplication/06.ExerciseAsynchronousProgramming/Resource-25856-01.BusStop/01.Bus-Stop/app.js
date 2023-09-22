async function getInfo() {
    let stopId = document.getElementById('stopId').value;
    let stopName = document.getElementById('stopName');
    let ul = document.getElementById('buses');

    try {
        let url = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`;
        let response = await fetch(url);

        if (!response.ok) {
            let error = new Error(response.statusText);
            throw error;
        }
        let data = await response.json();

        stopName.textContent = data.name;

        Object.entries(data.buses).forEach(([busId, time]) => {
            let liElement = document.createElement('li');
            liElement.textContent = `Bus ${busId} arrives in ${time} minutes`;
            ul.appendChild(liElement);
        });
    } catch (err) {
        stopName.textContent = 'Error';
    }
}