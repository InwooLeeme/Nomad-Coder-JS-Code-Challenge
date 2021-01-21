const keys = document.querySelectorAll("input");

function getValue(event){
    const currentValue = event.target.value;
    console.log(currentValue, typeof currentValue);
}

function init(){
    keys.forEach(key => {
        key.addEventListener("click", getValue);
    });
}

init();