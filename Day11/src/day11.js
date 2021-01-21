const keys = document.querySelectorAll("input");
const displayContainer = document.getElementById('display');
const resetBtn = document.getElementById("clear");

function getValue(event){
    const currentValue = event.target.value;
    displayContainer.value += currentValue;
    return currentValue;
}

function resetDisplay(){
    displayContainer.value = "";
}

function init(){
    keys.forEach(key => {
        key.addEventListener("click", getValue);
    });
    resetBtn.addEventListener("click", resetDisplay);
}

init();