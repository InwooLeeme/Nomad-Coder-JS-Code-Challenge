// <⚠️ DONT DELETE THIS ⚠️>
//import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const body = document.querySelector("body");
const selectBar = document.querySelector("select");
const pgTitle = document.querySelector('h1');
const CURRENT_COUNTRY = "country";

function getCountryName(){
    const currentName = selectBar.value;
    localStorage.setItem(CURRENT_COUNTRY, currentName);
    changeBack(currentName);
}

// Change background image and gradient when select the country.

function changeBack(text){
    switch (text){
        case 'KR':
            selectKr();
        break;
    }
}

function selectKr(){
    body.style.backgroundImage = `url(${"https://images.unsplash.com/photo-1485186667901-c039c19ecac3?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTUyfHxrb3JlYXxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60"})`;
    pgTitle.style.background = `linear-gradient(to right bottom, #be0818, #bd003b, #ac005f, #850085, #2307a6)`;
    neverUsed();
}

function neverUsed(){
    pgTitle.style.webkitBackgroundClip = 'text';  
    pgTitle.style.webkitTextFillColor = 'transparent';
}

function init(){
    selectBar.addEventListener('change', getCountryName);
}

init();