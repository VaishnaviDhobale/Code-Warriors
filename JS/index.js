const timerDisplay = document.getElementById("timerDisplay");
const inputHours = document.getElementById("inputHours");
const inputMinutes = document.getElementById("inputMinutes");
const timerNameDisplay = document.getElementById("timerName");

let timerName = '';
let duration = 0;
let remaining = 0;
let isPaused = false;
let interval = null;

function setTimer(){
    timerName = inputName.value.trim();
    const hours = parseInt(inputHours.value) || 0;
    const minutes = parseInt(inputMinutes.value) || 0;
    duration = (hours * 3600) + (minutes * 60);
    remaining = duration;

    if (!timerName || duration <= 0) {
        alert("Please enter a valid timer name and time.");
        return;
    }
    timerNameDisplay.textContent = timerName;
    updateDisplay();
}

function startTimer(){
    if (remaining <= 0){
        return;
    }
    if (interval){
        return;
    }

    interval = setInterval(() =>{
        if(!isPaused){
            remaining--;
            updateDisplay();
            if(remaining <=0){
                clearInterval(interval);
                interval = null;
                alert("Time is Up");
            }
        }
    },1000 );

}

function updateDisplay(){
    const hrs = Math.floor(remaining / 3600);
    const mins = Math.floor((remaining % 3600) / 60);
    const secs = remaining % 60;

    timerDisplay.textContent = `${String(hrs).padStart(2,'0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function pauseTimer() {
    isPaused = !isPaused;
}

function stopTimer() {
    clearInterval(interval);
    interval = null;
    remaining = 0;
    updateDisplay();
}

function resetTimer (){
    clearInterval(interval);
    interval = null;
    remaining = duration;
    updateDisplay();
}

document.getElementById("setTimerBtn").addEventListener("click", setTimer);
document.getElementById("startBtn").addEventListener("click", startTimer);
document.getElementById("pauseBtn").addEventListener("click", pauseTimer);
document.getElementById("stopBtn").addEventListener("click", stopTimer);
document.getElementById("resetBtn").addEventListener("click", resetTimer);
