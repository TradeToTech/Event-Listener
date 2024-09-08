

let hours = 0, minutes = 0, seconds = 0;
let interval = null;
 let running = false;
 
function updateDisplay() {
  const display = document.getElementById('display');
  const format = (unit) => unit < 10 ? '0' + unit : unit;
  display.innerText = `${format(hours)}:${format(minutes)}:${format(seconds)}`;
}

 
function startTimer() {
  if (!running) {
    interval = setInterval(() => {
      seconds++;
      if (seconds === 60) {
        seconds = 0;
        minutes++;
      }
      if (minutes === 60) {
        minutes = 0;
        hours++;
      }
      updateDisplay();
    }, 1000);
    running = true;
  }
}

function stopTimer(){
clearInterval(interval);
running =false;
}

    function resetTimer() {
  stopTimer();
  hours = 0;
  minutes = 0;
  seconds = 0;
  updateDisplay();
}

    
document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('stop').addEventListener('click', stopTimer);
document.getElementById('reset').addEventListener('click', resetTimer);

