const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const pauseButton = document.getElementById('pauseButton');
const resetButton = document.getElementById('resetButton');

let timeName = '';
let duration = 0;
let remaining = 0;
let isPaused = false;
let isReset = false;


function startTimer(){

}

function pauseTimer() {
    isPaused = !isPaused;
}

