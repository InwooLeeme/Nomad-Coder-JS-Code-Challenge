// <⚠️ DONT DELETE THIS ⚠️>
//import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const h1 = document.querySelector('h1');
const body = document.querySelector('body');

function handleResize(){
    h1.style.color = "white";
    if(window.innerWidth > 700){
        body.style.backgroundColor = "#6c5ce7";
    }
    if(window.innerWidth > 1000){
        body.style.backgroundColor = "#fdcb6e";
    }
    else if (window.innerWidth <= 500){
        body.style.backgroundColor = "#74b9ff";
    }
}

function init(){
    window.addEventListener('resize',handleResize);
}

init();