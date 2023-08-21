let startTime;
let elapsedTime = 0;
let interval;
let lapCount = 1;

const timeElement = document.getElementById("time");
const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");
const resetButton = document.getElementById("reset");
const lapButton = document.getElementById("lap");
const lapList = document.getElementById("lapList");

function updateTime() {
  const currentTime = new Date().getTime();
  const deltaTime = currentTime - startTime + elapsedTime;
  const time = new Date(deltaTime);

  const hours = time.getUTCHours().toString().padStart(2, "0");
  const minutes = time.getUTCMinutes().toString().padStart(2, "0");
  const seconds = time.getUTCSeconds().toString().padStart(2, "0");

  timeElement.textContent = `${hours}:${minutes}:${seconds}`;
}

function startTimer() {
  startTime = new Date().getTime() - elapsedTime;
  interval = setInterval(updateTime, 1000);
}

function pauseTimer() {
  clearInterval(interval);
  elapsedTime = new Date().getTime() - startTime;
}

function resetTimer() {
  clearInterval(interval);
  elapsedTime = 0;
  updateTime();
  lapList.innerHTML = "";
  lapCount = 1;
}

function lapTimer() {
  const lapTime = timeElement.textContent;
  const lapItem = document.createElement("li");
  lapItem.textContent = `Lap ${lapCount}: ${lapTime}`;
  lapList.appendChild(lapItem);
  lapCount++;
}

startButton.addEventListener("click", startTimer);
pauseButton.addEventListener("click", pauseTimer);
resetButton.addEventListener("click", resetTimer);
lapButton.addEventListener("click", lapTimer);