// <⚠️ DONT DELETE THIS ⚠️>
//import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const rangeBar = document.querySelector('.setRange');

function handleRange(){
    const currentRange = rangeBar.value;
    console.log(currentRange);
}

function init(){
    rangeBar.addEventListener('input', handleRange);
}

init();