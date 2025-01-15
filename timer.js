const timeInput = document.getElementById("timeInput");
const startBtn = document.getElementById("startBtn");
const display = document.getElementById("display");
const controls = document.getElementById("controls");
const pauseBtn = document.getElementById("pauseBtn");
const stopBtn = document.getElementById("stopBtn");

let timer;
let elapsedTime = 0;
let isRunning = false;
let lastTime = 0;
let targetTime = 0;

startBtn.addEventListener("click", () => {
  const timeParts = timeInput.value.split(":");
  const hours = parseInt(timeParts[0]) * 60 * 60;
  const minutes = parseInt(timeParts[1]) * 60;
  const seconds = parseInt(timeParts[2]);
  targetTime = hours + minutes + seconds;

  if (targetTime <= 0 || targetTime >= 12 * 60 * 60) {
    alert("Please enter a valid time from 00:00:01 to 12:00:00");
    return;
  }

  elapsedTime = 0;
  isRunning = false;
  display.textContent = "00:00:00";

  timeInput.style.display = "none";
  startBtn.style.display = "none";
  display.style.display = "block";
  controls.style.display = "block";
  startTimer();
});

function startTimer() {
  if (!isRunning) {
    lastTime = Date.now();
  }
  isRunning = true;
  // run();
  timer = setInterval(run, 1000);
  pauseBtn.textContent = "Pause";
}

function run() {
  if (!isRunning) {
    return;
  }

  const now = Date.now();
  const elapsed = (now - lastTime) / 1000;
  elapsedTime += elapsed;
  lastTime = now;

  if (Math.floor(elapsedTime) >= targetTime) {
    elapsedTime = targetTime;
    updateDisplay(targetTime);
    clearInterval(timer);
    setTimeout(() => {
      alert("Timer Completed");
      resetTimer();
    }, 10); 
    return;
  }
  updateDisplay(Math.floor(elapsedTime));
}

function updateDisplay(time) {
  const hours = String(Math.floor(time / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((time % 3600) / 60)).padStart(2, "0");
  const seconds = String(Math.floor(time % 60)).padStart(2, "0");
  display.textContent = `${hours}:${minutes}:${seconds}`;
}

pauseBtn.addEventListener("click", () => {
  if (isRunning) {
    isRunning = false;
    clearInterval(timer);
    pauseBtn.textContent = "Resume";
  } else {
    // lastTime = Date.now();
    startTimer();
    pauseBtn.textContent = "Pause";
  }
});

stopBtn.addEventListener("click", () => {
  stopTimer();
  resetTimer();
});

function stopTimer() {
  clearInterval(timer);
  isRunning = false;
}

function resetTimer() {
  timeInput.style.display = "block";
  timeInput.value = "00:00:00";
  startBtn.style.display = "block";
  display.style.display = "none";
  controls.style.display = "none";
}
