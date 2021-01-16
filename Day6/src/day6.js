// <⚠️ DONT DELETE THIS ⚠️>
//import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const body = document.querySelector("body");
const selectBar = document.querySelector("select");
const pgTitle = document.querySelector('h1');
const CURRENT_COUNTRY = "country";

function getCountryName(){
    const currentName = selectBar.options[selectBar.selectedIndex].value;
    localStorage.setItem(CURRENT_COUNTRY, currentName);
    changeBack(currentName);
    //console.log(currentName);
}

// Change background image and gradient when select the country.

function changeBack(text){
    if (text === "KR") 
    {
        selectKr();
    } 
    else if (text === "GE") 
    {
        selectGE();
    } 
    else if (text === "TK")
    {
        selectTK();
    } 
    else if (text === "FL") 
    {
        selectFL();
    }
}

function selectKr(){
    body.style.backgroundImage = `url(https://images.unsplash.com/photo-1485186667901-c039c19ecac3?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTUyfHxrb3JlYXxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60)`;
    pgTitle.style.background = `linear-gradient(to right bottom, #be0818, #bd003b, #ac005f, #850085, #2307a6)`;
    neverUsed();
}

function selectGE(){
    body.style.backgroundImage = `url(https://images.unsplash.com/photo-1531816458010-fb7685eecbcb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)`;
    pgTitle.style.background = `linear-gradient(to bottom, #2f17c9, #6f56db, #a08eeb, #cfc6f6, #ffffff)`;
    neverUsed();
}

function selectTK(){
    body.style.backgroundImage = `url(https://images.unsplash.com/photo-1589656850652-8009782e060a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)`;
    pgTitle.style.background = `linear-gradient(to bottom, #cd1919, #e74763, #ef76a1, #eda4d1, #ebceef, #ebceef, #ebceef, #ebceef, #eda4d1, #ef76a1, #e74763, #cd1919)`;
    neverUsed();
}

function selectFL(){
    body.style.backgroundImage = `url(https://images.unsplash.com/photo-1518203441944-e9578e4b1635?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8ZmlubGFuZHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60)`;
    pgTitle.style.background = `linear-gradient(to bottom, #ffffff, #dbd4fa, #b9a8f3, #977eea, #7452de, #7452de, #7452de, #7452de, #977eea, #b9a8f3, #dbd4fa, #ffffff)`;
    neverUsed();
}

function neverUsed(){
    pgTitle.style.webkitBackgroundClip = 'text';  
    pgTitle.style.webkitTextFillColor = 'transparent';
}

function rememberCountry(){
    const country = localStorage.getItem(CURRENT_COUNTRY);
    //if(country !== null){
        selectBar.setAttribute("value", country);
        selectBar.value = country;
        changeBack(country);
    //}
}

function init(){
    selectBar.addEventListener('change', getCountryName);
    window.addEventListener('load', rememberCountry);
}

init();