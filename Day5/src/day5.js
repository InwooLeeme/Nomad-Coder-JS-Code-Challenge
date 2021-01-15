//import "./styles.css";

// You're gonna need this
const NINE_HOURS_MILLISECONDS = 32400000;
const ONE_HOURS_MILLISECONDS = 32400000 / 9;
const ONE_DAY_MILLISECONDS = ONE_HOURS_MILLISECONDS * 24;

function getTime() {
  // Don't delete this.
  const xmasDay = new Date("2021-12-24:00:00:00+0900");
  const leftDayMilliSeconds = xmasDay - new Date();
  const leftDays = Math.floor(leftDayMilliSeconds / ONE_DAY_MILLISECONDS);
  
}

function init() {
  setInterval(getTime, 1000);
}
init();