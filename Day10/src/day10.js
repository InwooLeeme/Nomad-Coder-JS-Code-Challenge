// <⚠️ DONT DELETE THIS ⚠️>
//import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const rangeBar = document.querySelector('.setRange');
const displayRangeText = document.getElementById("changeText");
const guessNumber = document.getElementById("guessNumber");
const playBtn = document.getElementById("playBtn");
const displayNumber = document.querySelector(".displayNumResult");
const gameResult = document.querySelector(".gameResult");

function genRandomNumber(){
    const currentRange = rangeBar.value;
    const randNumber = Math.round(Math.random() * currentRange);
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
    displayNumber.innerHTML = `You chose:${guessNumber},the machine chose:${randomNumber}`;
    if(guessNumber === randomNumber){
        // if guessnumber and randomNumber is correct
        gameResult.innerHTML = `You Win!`;
    }
    else{
        // if guessnumber and randomNumber is not correct
        gameResult.innerHTML = `You Lost!`;
    }
}

function init(){
    rangeBar.addEventListener('input', displayRange);
    rangeBar.addEventListener('change', genRandomNumber);
    guessNumber.addEventListener('change', getUserGuess);
    playBtn.addEventListener('click', inspectNumber);
}

init();