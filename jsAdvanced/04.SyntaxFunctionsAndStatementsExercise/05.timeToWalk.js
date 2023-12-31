function timeToWalk(steps, footLength, speed) {
    let distanceInMeters = steps * footLength;
    let distanceInKilometers = distanceInMeters / 1000;
    let breakTime = Math.trunc(distanceInMeters / 500);
    let walkTime = distanceInKilometers / speed;
    let hours = Math.trunc(walkTime);

    if (hours < 10) {
        hours = "0" + hours;
    }

    let minutes = Math.trunc(walkTime * 60 + breakTime);

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    let seconds = Math.round(walkTime * 3600 - (Math.trunc(walkTime * 60)) * 60);

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    console.log(`${hours}:${minutes}:${seconds}`);
}
timeToWalk(4000, 0.60, 5)