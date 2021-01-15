//import "./styles.css";

// You're gonna need this
const NINE_HOURS_MILLISECONDS = 32400000;
const ONE_HOURS_MILLISECONDS = 32400000 / 9;
const ONE_DAY_MILLISECONDS = ONE_HOURS_MILLISECONDS * 24;
const ONE_MINUTE_MILLISECONDS = ONE_HOURS_MILLISECONDS / 60;
const ONE_SECOND_MILLISECONDS = 1000;

function getTime() {
  // Don't delete this.
  const xmasDay = new Date("2021-12-24:00:00:00+0900");
  const leftMilliSeconds = xmasDay - new Date();
  const leftDays = Math.floor(leftMilliSeconds / ONE_DAY_MILLISECONDS);
  const leftHours = Math.floor((leftMilliSeconds % ONE_DAY_MILLISECONDS) / ONE_HOURS_MILLISECONDS);
  const leftMinutes = Math.floor(((leftMilliSeconds % ONE_DAY_MILLISECONDS) % ONE_HOURS_MILLISECONDS) / ONE_MINUTE_MILLISECONDS);
  const leftSeconds = Math.floor((((leftMilliSeconds % ONE_DAY_MILLISECONDS) % ONE_HOURS_MILLISECONDS) % ONE_MINUTE_MILLISECONDS) / ONE_SECOND_MILLISECONDS);
}

function init() {
  setInterval(getTime, 1000);
}
init();