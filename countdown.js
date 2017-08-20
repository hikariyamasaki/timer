
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

function resetTimer(){
  stopTimer();
  indexNow = 0
  remaintime = time[indexNow]
  setTable();
  writeTime();
}

function nextIndex() {
  indexNow += 1
  setTable()
  //全ての項目を終了したらお疲れ様
  if (indexNow == index.length) {
    resetTimer()
    writeOtukare()
  }else{
    remaintime = Number(time[indexNow])*60 + 1
    writeTime()
  }
}

function countdown() {
  remaintime -= 1;
  writeTime();

  //項目が終了したら
  if (remaintime == 0) {
    nextIndex()
  }
}

function writeTime() {
  timerview = document.getElementById("timeview");

  var minites = Math.floor(remaintime / 60);
  var seconds = remaintime - minites*60;
  timeview.innerHTML = String(("0"+minites).slice(-2)) + ":" + String(("0"+seconds).slice(-2));

}

function writeOtukare() {
  timerview = document.getElementById("timeview");

  timeview.innerHTML = "お疲れ様でした";
}
