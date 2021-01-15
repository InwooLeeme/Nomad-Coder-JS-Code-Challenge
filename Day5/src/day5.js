//import "./styles.css";

// You're gonna need this
const NINE_HOURS_MILLISECONDS = 32400000;
const ONE_HOURS_MILLISECONDS = 32400000 / 9;
const ONE_DAY_MILLISECONDS = ONE_HOURS_MILLISECONDS * 24;
const ONE_MINUTE_MILLISECONDS = ONE_HOURS_MILLISECONDS / 60;
const ONE_SECOND_MILLISECONDS = 1000;

const body = document.querySelector('body');
const dayController = document.querySelector('.controllDay');
const hourController = document.querySelector('.controllHour');
const minController = document.querySelector('.controllMin');
const secController = document.querySelector('.controllSec');

function getTime() {
  // Don't delete this.
  const xmasDay = new Date("2021-12-24:00:00:00+0900");
  const leftMilliSeconds = xmasDay - new Date();
  const leftDays = Math.floor(leftMilliSeconds / ONE_DAY_MILLISECONDS);
  const leftHours = Math.floor((leftMilliSeconds % ONE_DAY_MILLISECONDS) / ONE_HOURS_MILLISECONDS);
  const leftMinutes = Math.floor(((leftMilliSeconds % ONE_DAY_MILLISECONDS) % ONE_HOURS_MILLISECONDS) / ONE_MINUTE_MILLISECONDS);
  const leftSeconds = Math.floor((((leftMilliSeconds % ONE_DAY_MILLISECONDS) % ONE_HOURS_MILLISECONDS) % ONE_MINUTE_MILLISECONDS) / ONE_SECOND_MILLISECONDS);

  dayController.innerHTML = `${leftDays < 10 ? `0${leftDays}` : `${leftDays}`}D`;
  hourController.innerHTML = `${leftHours < 10 ? `0${leftHours}` : `${leftHours}`}H`;
  minController.innerHTML = `${leftMinutes < 10 ? `0${leftMinutes}` : `${leftMinutes}`}M`;
  secController.innerHTML = `${leftSeconds < 10 ? `0${leftSeconds}` : `${leftSeconds}`}S`;
}

function init() {
  setInterval(getTime, 1000);
}
init();