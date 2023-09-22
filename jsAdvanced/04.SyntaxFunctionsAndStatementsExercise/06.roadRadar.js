function roadRadar(currentSpeed, area) {
    let motorwayLimit = 130;
    let interstateLimit = 90;
    let cityLimit = 50;
    let residentialLimit = 20;
    let output = ``;
    let differenceInSpeed = 0;
    let status = '';

    switch (area) {
        case "motorway":
            withinLimit(currentSpeed, motorwayLimit);
            break;
        case "interstate":
            withinLimit(currentSpeed, interstateLimit);
            break;
        case "city":
            withinLimit(currentSpeed, cityLimit);
            break;
        case "residential":
            withinLimit(currentSpeed, residentialLimit);
            break;
    }
    console.log(output);

    function withinLimit(currentSpeed, limit) {
        if (currentSpeed <= limit) {
            output = `Driving ${currentSpeed} km/h in a ${limit} zone`
        } else {
            differenceInSpeed = currentSpeed - limit;
            if (differenceInSpeed <= 20) {
                status = 'speeding'
            } else if (differenceInSpeed <= 40) {
                status = 'excessive speeding'
            } else {
                status = 'reckless driving'
            }
            output = `The speed is ${differenceInSpeed} km/h faster than the allowed speed of ${limit} - ${status}`
        }
    }
}
roadRadar(200, 'motorway')