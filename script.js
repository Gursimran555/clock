let stopwatchInterval;
let timerInterval;

function startStopwatch() {
    let stopwatchTime = 0;
    stopwatchInterval = setInterval(() => {
        stopwatchTime++;
        updateDisplay("stopwatchDisplay", stopwatchTime);
    }, 1000);
}

function stopStopwatch() {
    clearInterval(stopwatchInterval);
}

function resetStopwatch() {
    clearInterval(stopwatchInterval);
    updateDisplay("stopwatchDisplay", 0);
}

function startTimer() {
    let timerTime = parseInt(document.getElementById("timerInput").value);
    if (isNaN(timerTime) || timerTime <= 0) {
        alert("Please enter a valid positive number of seconds.");
        return;
    }
    timerInterval = setInterval(() => {
        if (timerTime <= 0) {
            clearInterval(timerInterval);
            alert("Timer finished!");
            return;
        }
        timerTime--;
        updateDisplay("timerDisplay", timerTime);
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}

function resetTimer() {
    clearInterval(timerInterval);
    document.getElementById("timerInput").value = "";
    updateDisplay("timerDisplay", 0);
}

function updateDisplay(id, time) {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = Math.floor(time % 60);
    document.getElementById(id).textContent = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
}

function padZero(value) {
    return value.toString().padStart(2, "0");
}























//let stopwatchInterval, stopwatchTime = 0;
//let timerInterval, timerTime = 0;
//
//function startStopwatch() {
//    stopwatchInterval = setInterval(() => updateDisplay(++stopwatchTime, "stopwatchDisplay"), 1000);
//}
//
//function startTimer() {
//    let inputSeconds = parseInt(document.getElementById("timerInput").value);
//    if (isNaN(inputSeconds)) return alert("Please enter a valid number of seconds.");
//    timerTime = inputSeconds;
//    timerInterval = setInterval(() => {
//        if (timerTime <= 0) {
//            clearInterval(timerInterval);
//            alert("Timer finished!");
//        } else updateDisplay(--timerTime, "timerDisplay");
//    }, 1000);
//}
//
//function stop(interval) {
//    clearInterval(interval);
//}
//
//function reset(interval, time, displayId, inputId) {
//    clearInterval(interval);
//    document.getElementById(displayId).textContent = "00:00:00";
//    if (inputId) document.getElementById(inputId).value = "";
//    time = 0;
//}
//
//function updateDisplay(time, displayId) {
//    let hours = Math.floor(time / 3600);
//    let minutes = Math.floor((time % 3600) / 60);
//    let seconds = Math.floor(time % 60);
//    document.getElementById(displayId).textContent = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
//}
//
//function padZero(value) {
//    return value.toString().padStart(2, "0");
//}
//
//
//
//












//let stopwatchInterval;
//let stopwatchTime = 0;
//
//function startStopwatch() {
//    stopwatchInterval = setInterval(updateStopwatch, 1000);
//}
//
//function stopStopwatch() {
//    clearInterval(stopwatchInterval);
//}
//
//function resetStopwatch() {
//    clearInterval(stopwatchInterval);
//    stopwatchTime = 0;
//    updateStopwatch();
//}
//
//function updateStopwatch() {
//    stopwatchTime++;
//    const hours = Math.floor(stopwatchTime / (60 * 60));
//    const minutes = Math.floor((stopwatchTime % (60 * 60)) / (60));
//    const seconds = Math.floor(stopwatchTime % (60));
//
//    document.getElementById("stopwatchDisplay").textContent =
//        `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
//}
//
//function padZero(value) {
//    return value.toString().padStart(2, "0");
//}
//
//let timerInterval;
//let timerTime = 0;
//
//function startTimer() {
//    const inputSeconds = parseInt(document.getElementById("timerInput").value);
//    if (isNaN(inputSeconds)) {
//        alert("Please enter a valid number of seconds.");
//        return;
//    }
//
//    timerTime = inputSeconds;
//    timerInterval = setInterval(updateTimer, 1000);
//}
//
//function stopTimer() {
//    clearInterval(timerInterval);
//}
//
//function resetTimer() {
//    clearInterval(timerInterval);
//    document.getElementById("timerInput").value = "";
//    timerTime = 0;
//    updateTimer();
//}
//
//function updateTimer() {
//    if (timerTime <= 0) {
//        clearInterval(timerInterval);
//        alert("Timer finished!");
//        return;
//    }
//
//    timerTime--;
//    const hours = Math.floor(timerTime / (60 * 60));
//    const minutes = Math.floor((timerTime % (60 * 60)) / (60));
//    const seconds = Math.floor(timerTime % (60));
//
//    document.getElementById("timerDisplay").textContent =
//        `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
//}