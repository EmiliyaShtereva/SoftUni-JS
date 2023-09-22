function createAssemblyLine() {

    function hasClima(obj) {
        obj.temp = 21;
        obj.tempSettings = 21;
        obj.adjustTemp = function() {
            if (obj.temp < obj.tempSettings) {
                obj.temp++;
            } else if (obj.temp > obj.tempSettings) {
                obj.temp -= 1;
            }
        }
    };
    return obj;


    function hasAudio(obj) {
        obj.currentTrack = null;
        obj.nowPlaying = function() {
            if (obj.currentTrack) {
                `Now playing '${currentTrack.name}' by ${currentTrack.artist}`;
            }
        }
    };
    return obj;

    function hasParktronic(obj) {
        obj.checkDistance = function(distance) {
            if (distance < 0.1) {
                console.log("Beep! Beep! Beep!");
            } else if (0.1 <= distance < 0.25) {
                console.log("Beep! Beep!");
            } else if (0.25 <= distance < 0.5) {
                console.log("Beep!");
            }
        }
    };
    return obj;

    return {
        hasClima: hasClima,
        hasAudio: hasAudio,
    hasParktronic: hasParktronic
    };
}
