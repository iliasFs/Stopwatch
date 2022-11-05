//initialize variables

let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];

let timeDisplay = document.getElementById("time__display");
let startButton = document.getElementById("start");
let pauseButton = document.getElementById("pause");
let resetButton = document.getElementById("reset");
let lapButton = document.getElementById("lap");
let lapList = document.querySelector(".lap__list");
let intervalId;
let n = 0;

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

startButton.addEventListener("click", () => {
  if (intervalId !== null) {
    clearInterval(intervalId);
  }
  intervalId = setInterval(updateTime, 10);
  // setInterval takes as parameters a function that will run continiously every 10ms as the second parameter
});

pauseButton.addEventListener("click", () => {
  clearInterval(intervalId);
});

resetButton.addEventListener("click", () => {
  while (lapList.firstChild) {
    lapList.removeChild(lapList.lastChild);
  }
  clearInterval(intervalId);
  [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
  timeDisplay.innerHTML = "00 : 00 : 00 : 000";
  n = 0;
});

//

lapButton.addEventListener("click", () => {
  n++;
  const lapItem = document.createElement("div");
  lapItem.classList.add("lap__item");

  const paraTime = document.createElement("p");
  paraTime.classList.add("para__time");
  paraTime.innerHTML = `      Lap${n}) ` + timeDisplay.innerHTML;

  const lapButton = document.createElement("button");
  lapButton.classList.add("lap__button");
  lapButton.innerHTML = "DELETE";

  lapList.appendChild(lapItem);
  lapItem.appendChild(paraTime);
  lapItem.appendChild(lapButton);
  document.querySelectorAll(".lap__button").forEach((element) => {
    element.addEventListener("click", () => {
      element.parentElement.remove();
    });
  });
});

// DARK-MODE

const css = document.querySelector("#cssfile");
const icon = document.querySelector("#icon");
let change = true;
icon.addEventListener("click", () => {
  if (icon.hasAttributes("fa-moon")) {
    if (change) {
      css.setAttribute("href", "styles2.css");
      icon.classList.remove("fa-moon");
      icon.classList.add("fa-sun");
      change = false;
    } else {
      css.setAttribute("href", "styles.css");
      icon.classList.remove("fa-sun");
      icon.classList.add("fa-moon");
      change = true;
    }
  }
});
