// <⚠️ DONT DELETE THIS ⚠️>
//import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const rangeBar = document.querySelector('.setRange');
const displayRangeText = document.getElementById("changeText");
const guessNumber = document.getElementById("guessNumber");
const playBtn = document.getElementById("playBtn");

function genRandomNumber(){
    const currentRange = rangeBar.value;
    const randNumber = Math.floor(Math.random() * currentRange);
    return randNumber;
}

function getUserGuess(){
    const currentGuess = guessNumber.value;
    return currentGuess;
}

function displayRange(){
    displayRangeText.innerText = rangeBar.value;
}


function inspectNumber(){
    const guessNumber = parseInt(getUserGuess());
    const randomNumber = genRandomNumber();
    console.log(guessNumber, randomNumber);
}

function init(){
    rangeBar.addEventListener('input', displayRange);
    rangeBar.addEventListener('change', genRandomNumber);
    guessNumber.addEventListener('change', getUserGuess);
    playBtn.addEventListener('click', inspectNumber);
}

init();