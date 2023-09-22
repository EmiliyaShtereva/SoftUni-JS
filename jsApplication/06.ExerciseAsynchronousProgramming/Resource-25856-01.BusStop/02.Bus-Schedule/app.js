function solve() {
    const infoBox = document.querySelector('div#info span.info');
    let departBtn = document.getElementById('depart');
    let arriveBtn = document.getElementById('arrive');

    let nextStopId = 'depot';
    let stopName = '';

    function depart() {
        fetch(`http://localhost:3030/jsonstore/bus/schedule/${nextStopId}`)
            .then(response => {
                if (response.status != 200) {
                    throw new Error(`Error`);
                };
                return response.json();
            })
            .then(data => {
                nextStopId = data.next;
                stopName = data.name
                infoBox.textContent = `Next stop ${stopName}`;
                departBtn.disabled = true;
                arriveBtn.disabled = false;
            })
            .catch(e => {
                infoBox.textContent = e.message;
                departBtn.disabled = true;
                arriveBtn.disabled = true;
            })
    }

    function arrive() {

        infoBox.textContent = `Arriving at ${stopName}`;
        departBtn.disabled = false;
        arriveBtn.disabled = true;

    }

    return {
        depart,
        arrive
    };
}

let result = solve();