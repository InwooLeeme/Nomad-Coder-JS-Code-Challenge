// <⚠️ DONT DELETE THIS ⚠️>
//import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const h1 = document.querySelector('h1');
const body = document.querySelector('body');

function handleResize(){
    h1.style.color = "white";
    
}

function init(){
    window.addEventListener('resize',handleResize);
}

init();