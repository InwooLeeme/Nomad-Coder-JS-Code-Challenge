// <⚠️ DONT DELETE THIS ⚠️>
//import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const body = document.querySelector("body");
const selectBar = document.querySelector("select");

function getCountryName(){
    const currentName = selectBar.value;
    console.log(currentName);
}

function init(){
    selectBar.addEventListener('change', getCountryName);
}

init();