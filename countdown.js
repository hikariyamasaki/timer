
var remaintime = 600; // seconds
var isRunning; // タイマーが動いているかのフラグ
var intervalState;
function startTimer() {
  if (isRunning == true) {
    return;
  } else {
    isRunning = true;
  }
  intervalState  = setInterval(countdown,1000) // countdown each 1000ms = 1s
}

function stopTimer() {
  if (isRunning == false) {
    return;
  } else {
    isRunning = false;
  }
  clearInterval(intervalState); // タイマーの動きを止める
}

function countdown() {
  remaintime -= 1;
  writeTime();
}

function writeTime() {
  timerview = document.getElementById("timeview");

  var minites = Math.floor(remaintime / 60);
  var seconds = remaintime - minites*60;
  timeview.innerHTML = String(minites) + ":" + String(seconds);

}
