const resetBtn = document.getElementById("reset-btn");
const startStopResumeBtn = document.getElementById("startstopresume-btn");
const timer = document.getElementById("timer");

let millisecond = 0,
  second = 0,
  minute = 0,
  hour = 0;

let started = null;

function stopWatchRunning() {
  millisecond++;

  if (millisecond === 100) {
    millisecond = 0;
    second++;

    if (second === 60) {
      second = 0;
      minute++;

      if (minute === 60) {
        minute = 0;
        hour++;
      }
    }
  }

  timer.innerText =
    (hour < 10 ? "0" : "") +
    hour +
    ":" +
    (minute < 10 ? "0" : "") +
    minute +
    ":" +
    (second < 10 ? "0" : "") +
    second +
    "." +
    (millisecond < 10 ? "0" : "") +
    millisecond;
}

function startStopResume() {
  if (startStopResumeBtn.innerText === "Start") {
    started = setInterval(stopWatchRunning, 10);
    startStopResumeBtn.innerText = "Stop";
    resetBtn.disabled = true;
    startStopResumeBtn.style.backgroundColor = "#b31760";
    resetBtn.style.color = "#1010104d";
    resetBtn.style.backgroundColor = "#efefef4d";
  } else if (startStopResumeBtn.innerText === "Stop") {
    clearInterval(started);
    startStopResumeBtn.innerText = "Resume";
    resetBtn.disabled = false;
    startStopResumeBtn.style.backgroundColor = "#f29e25";
    resetBtn.style.backgroundColor = "#4387d0";
    resetBtn.style.color = "#fff";
  } else if (startStopResumeBtn.innerText === "Resume") {
    started = setInterval(stopWatchRunning, 10);
    startStopResumeBtn.innerText = "Stop";
    resetBtn.disabled = true;
    startStopResumeBtn.style.backgroundColor = "#b31760";
    resetBtn.style.color = "#1010104d";
    resetBtn.style.backgroundColor = "#efefef4d";
  }
}
startStopResumeBtn.addEventListener("click", startStopResume);

function reset() {
  if (resetBtn.innerText === "Reset") {
    (millisecond = 0), (second = 0), (minute = 0), (hour = 0);
    timer.innerText = "00:00:00.00";
    startStopResumeBtn.innerText = "Start";
    resetBtn.disabled = true;
    startStopResumeBtn.style.backgroundColor = "#17a69d";
    resetBtn.style.color = "#1010104d";
    resetBtn.style.backgroundColor = "#efefef4d";
  }
}
resetBtn.addEventListener("click", reset);
