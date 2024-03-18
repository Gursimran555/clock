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
