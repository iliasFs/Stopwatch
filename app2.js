//initialize variables

let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];

let timeDisplay = document.getElementById("time__display");
let startButton = document.getElementById("start");
let pauseButton = document.getElementById("pause");
let resetButton = document.getElementById("reset");
let intervalId ;


//create a function to update our time wich will run in the setInterval
function updateTime() {
  milliseconds += 10;
  if (milliseconds == 1000) {
    milliseconds = 0;
    seconds++;
    if (seconds == 60) {
      seconds = 0;
      minutes++;
      if (minutes == 60) {
        minutes = 0;
        hours++;
      }
    }
  }
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  let ms =
  milliseconds < 10
    ? "00" + milliseconds
    : milliseconds < 100
    ? "0" + milliseconds
    : milliseconds;
  timeDisplay.innerHTML = ` ${h} : ${m} : ${s} : ${ms}`;
}

//addEvent listeners to our buttons

document.getElementById("start").addEventListener("click", () => {
  if (intervalId !== null) {
    clearInterval(intervalId);
    
  }
  intervalId = setInterval(updateTime,10); 
  // setInterval takes as parameters a function that will run continiously every 10ms as the second parameter
});

document.getElementById("pause").addEventListener("click", () => {
  clearInterval(intervalId);
});
document.getElementById("reset").addEventListener("click", () => {
  clearInterval(intervalId);
  [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
  timeDisplay.innerHTML = "00 : 00 : 00 : 000";
});

//Adding zeros and finilazing the display

