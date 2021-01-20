// <⚠️ DONT DELETE THIS ⚠️>
//import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const rangeBar = document.querySelector('.setRange');
const displayRange = document.getElementById("changeText");

function handleRange(){
    const currentRange = rangeBar.value;
    displayRange.innerText = currentRange;    
}

function init(){
    rangeBar.addEventListener('input', handleRange);
}

init();