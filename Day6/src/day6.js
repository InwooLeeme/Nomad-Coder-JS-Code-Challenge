// <⚠️ DONT DELETE THIS ⚠️>
//import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const body = document.querySelector("body");
const selectBar = document.querySelector("select");
const CURRENT_COUNTRY = "country";

function getCountryName(){
    const currentName = selectBar.value;
    localStorage.setItem(CURRENT_COUNTRY, currentName);
}

function init(){
    selectBar.addEventListener('change', getCountryName);
}

init();