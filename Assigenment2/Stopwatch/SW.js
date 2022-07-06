var X = document.getElementsByTagName('h3')[0],
    start = document.getElementById('start'),
    stop = document.getElementById('stop')
clear = document.getElementById('clear'),
    seconds = 0, minutes = 0;

function add() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;

        }
    }

    X.textContent = (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);
    timer();
}
function timer() {
    time = setTimeout(add, 1000);
}
timer();

start.onclick = timer;

stop.onclick = function () {
    clearTimeout(time);
}

clear.onclick = function () {
    X.textContent = "00:00";
    seconds = 0; minutes = 0;
}


