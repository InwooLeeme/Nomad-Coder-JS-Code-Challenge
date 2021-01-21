const keys = document.querySelectorAll("input");
const displayContainer = document.getElementById('display');
const resetBtn = document.getElementById("clear");
const operators = document.querySelectorAll(".operator");
const equalBtn = document.getElementById("equal");

function getValue(event){
    const currentValue = event.target.value;
    displayValue(currentValue);
}

function resetDisplay(){
    displayContainer.value = "";
}

function displayValue(number){
    displayContainer.value += number;
}

function checkState(event){
    const currentOperator = event.target.value;
    displayValue(currentOperator);
}

function getResult(){
    const formula = displayContainer.value;
    const result = eval(formula);
    resetDisplay();
    displayValue(result);
}

function init(){
    keys.forEach(key => {
        key.addEventListener("click", getValue);
    });
    resetBtn.addEventListener("click", resetDisplay);
    operators.forEach(operator => {
        operator.addEventListener("click", checkState);
    });
    equalBtn.addEventListener('click', getResult);
}

init();