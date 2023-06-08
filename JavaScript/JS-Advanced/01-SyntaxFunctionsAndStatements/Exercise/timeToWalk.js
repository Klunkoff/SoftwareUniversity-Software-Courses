function timeToWalk(steps, footprint, kmPerHour) {

    let distanceInMeters = steps * footprint;
    let metersPerMin = (kmPerHour * 1000) / 60;
    let breakMinutes = Math.floor(distanceInMeters / 500);

    let time = (distanceInMeters / metersPerMin) + breakMinutes;

    let hours = parseInt(time / 60);
    let min = parseInt(time % 60);
    let sec = Math.round(time * 60) % 60;

    if (hours < 10) {
        hours = `0${hours}`;
    }

    if (min < 10) {
        min = `0${min}`;
    }

    if (sec < 10) {
        sec = `0${sec}`;
    }

    console.log(`${hours}:${min}:${sec}`);
}

timeToWalk(50500, 0.60, 5);
// timeToWalk(2564, 0.70, 5.5);