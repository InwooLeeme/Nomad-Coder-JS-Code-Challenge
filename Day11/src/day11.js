const keys = document.querySelectorAll("input");
const displayContainer = document.getElementById('display');

function getValue(event){
    const currentValue = event.target.value;
    displayContainer.value += currentValue;
    return currentValue;
}

function init(){
    keys.forEach(key => {
        key.addEventListener("click", getValue);
    });
}

init();