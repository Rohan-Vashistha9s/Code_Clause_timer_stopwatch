
const timerButton = document.querySelector(".timer__button")
const stopwatchButton = document.querySelector(".stopwatch__button")
const content = document.querySelector(".content")
const title = document.querySelector(".title")


stopwatchButton.addEventListener('click', () => {
  content.classList.add("move-mode");
});
timerButton.addEventListener('click', () => {
  content.classList.remove("move-mode");
});



$(document).ready(function () {

  $('.timer__button').click(function () {
    $('.timer__button').addClass("show");
    $('.stopwatch__button').removeClass("show");
  });

  $('.stopwatch__button').click(function () {
    $('.stopwatch__button').addClass("show");
    $('.timer__button').removeClass("show");
  });

});

// Timer variables
let timerInterval;
let timerSeconds = 0;
let timerMinutes = 0;
let timerHours = 0;

// Stopwatch variables
let stopwatchInterval;
let stopwatchSeconds = 0;
let stopwatchMinutes = 0;
let stopwatchHours = 0;

// Timer functions
function startTimer() {
  clearInterval(timerInterval);

  timerHours = parseInt(document.getElementById('hours').value);
  timerMinutes = parseInt(document.getElementById('minutes').value);
  timerSeconds = parseInt(document.getElementById('seconds').value);

  timerInterval = setInterval(updateTimer, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
}

function resetTimer() {
  clearInterval(timerInterval);

  timerHours = 0;
  timerMinutes = 0;
  timerSeconds = 0;

  document.getElementById('hours').value = '';
  document.getElementById('minutes').value = '';
  document.getElementById('seconds').value = '';
}

function updateTimer() {
  if (timerSeconds > 0) {
    timerSeconds--;
  } else {
    if (timerMinutes > 0) {
      timerMinutes--;
      timerSeconds = 59;
    } else {
      if (timerHours > 0) {
        timerHours--;
        timerMinutes = 59;
        timerSeconds = 59;
      } else {
        stopTimer();
        alert('Timer finished!');
      }
    }
  }

  document.getElementById('hours').value = timerHours.toString().padStart(2, '0');
  document.getElementById('minutes').value = timerMinutes.toString().padStart(2, '0');
  document.getElementById('seconds').value = timerSeconds.toString().padStart(2, '0');
}






// Stopwatch begin

const startBtn = document.querySelector('.start'),
  stHour = document.querySelector('.stHour'),
  stMin = document.querySelector('.stMin'),
  stSec = document.querySelector('.stSec');

startBtn.addEventListener('click', function () {

  if (this.innerHTML === "start") {
    this.innerHTML = "stop"
    this.style = `background-color: red`
    // this.style = `color: #fff`
    document.querySelector('.stopwatch__button').classList.add('active')
  }
  else if (this.innerHTML === "stop") {
    this.innerHTML = "reset"
    // this.style = `color: #fff`
    document.querySelector('.stopwatch__button').classList.add('reActive')
    this.style = `background-color: #0051ff`
  }
  else if (this.innerHTML === "reset") {
    this.innerHTML = "start"
    document.querySelector('.stopwatch__button').classList.remove('active')
    document.querySelector('.stopwatch__button').classList.remove('reActive')
    this.style = `background: #fff`
    document.querySelector('main.day-mode .start').style = `background: #8aafff`
  }



  // stopwatch()

});

function stopwatch() {

  if (startBtn.innerHTML === "stop") {
    stSec.innerHTML++
  }

  if (stSec.innerHTML > 59) {
    stSec.innerHTML = 00
    stMin.innerHTML++
  }
  if (stMin.innerHTML > 59) {
    stMin.innerHTML = 00
    stHour.innerHTML++
  }
  if (stHour.innerHTML > 24) {
    stHour.innerHTML = 00
  }

  if (startBtn.innerHTML === "start") {

    stHour.innerHTML = 0
    stMin.innerHTML = 0
    stSec.innerHTML = 0

  }
  setTimeout(() => stopwatch(), 1000)

}
stopwatch()

// Day and Dark theme

const dark = document.querySelector(".dark");
const day = document.querySelector(".day");
const main = document.querySelector("main")

day.addEventListener('click', function () {

  main.classList.add("day-mode");
  main.classList.remove("dark-mode");

});

dark.addEventListener('click', function () {

  main.classList.add("dark-mode");
  main.classList.remove("day-mode");

});


// Panel little animate

const cog = document.querySelector('.fas.fa-cog'),
  x = document.querySelector('.fas.fa-times'),
  panel = document.querySelector('.panel');


cog.addEventListener('click', function () {
  panel.classList.add('active')
  cog.style.transform = `translateY(-100%)`
  cog.style.opacity = `0`
});

x.addEventListener('click', function () {
  panel.classList.remove('active')
  cog.style.transform = `translateY(0%)`
  cog.style.opacity = `1`
});