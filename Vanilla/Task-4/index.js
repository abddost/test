const input = document.getElementById("timer-input");
const startButton = document.getElementById("start-timer");
const stopButton = document.getElementById("stop-timer");
const timerDisplay = document.getElementById("timer-display");
let timeLeft = 0;
let timerInterval;

function startTimer() {
  timeLeft = parseInt(input.value, 10) * 60;
  input.disabled = true;
  startButton.disabled = true;
  stopButton.disabled = false;
  timerInterval = setInterval(updateTimer, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
  input.disabled = false;
  startButton.disabled = false;
  stopButton.disabled = true;
  timeLeft = 0;
  updateDisplay();
}

function updateTimer() {
  timeLeft--;
  if (timeLeft <= 0) {
    stopTimer();
  } else {
    updateDisplay();
  }
}

function updateDisplay() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  timerDisplay.textContent = `${minutes} : ${seconds
    .toString()
    .padStart(2, "0")}`;
}

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    startTimer();
  }
});
