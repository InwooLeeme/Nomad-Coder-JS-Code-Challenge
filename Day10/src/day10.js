// <⚠️ DONT DELETE THIS ⚠️>
//import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const rangeBar = document.querySelector('.setRange');
const displayRange = document.getElementById("changeText");
const guessNumber = document.getElementById("guessNumber");

function genRandomNumber(number){
    const randNumber = Math.floor(Math.random() * number);
    console.log(randNumber);
}

function handleRange(){
    const currentRange = rangeBar.value;
    displayRange.innerText = currentRange;
    genRandomNumber(currentRange);
}


function getUserGuess(){
    const currentGuess = guessNumber.value;
    return currentGuess;
}



function init(){
    rangeBar.addEventListener('input', handleRange);
    guessNumber.addEventListener('change', getUserGuess);
}

init();