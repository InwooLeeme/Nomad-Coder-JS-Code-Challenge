const clockContainer = document.querySelector('.clockContainer');
const clock = document.querySelector('.clock');
const nameForm = document.querySelector(".nameForm");
const nameInput = document.querySelector(".nameInput");
const greeting = document.querySelector(".greeting");
const userStatus = document.querySelector('.userStatus');


const date = new Date();

const USER_LS = "USER";

// Clock function
function getTime(){
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    clock.innerHTML = `
        ${hour < 10 ? `0${hour}`:`${hour}`} : 
        ${minute < 10 ? `0${minute}`:`${minute}`} : 
        ${second < 10 ? `0${second}`:`${second}`}
    `;
}

function displayName(userName){
    userStatus.classList.add('hide');
    nameForm.classList.remove(`view`);
    greeting.classList.add('view');
    changeSentence(userName);
}

function changeSentence(userName){
    const currentHour = date.getHours();
    if(7 <= currentHour && currentHour < 12){
        greeting.innerHTML = `Good morning ${userName}`;
    }
    else if(12 <= currentHour && currentHour < 19){
        greeting.innerHTML = `Good afternoon ${userName}`;
    }
    else{
        greeting.innerHTML = `Good evening ${userName}`;
    }
}

function saveNameInLS(name){
    localStorage.setItem(USER_LS, name);
}

function getUserName(event){
    event.preventDefault();
    const currentUser = nameInput.value;
    nameInput.value = "";
    saveNameInLS(currentUser);
    displayName(currentUser);
}

function askForName(){
    nameForm.classList.add(`view`);
    nameForm.addEventListener('submit', getUserName);
}

function loadName(){
    const userName = localStorage.getItem(USER_LS);
    if(userName === null){
        userStatus.innerHTML = `What is your name?`;
        askForName();
    }
    else{
        // not null
        displayName(userName);
    }
}

function init(){
    setInterval(getTime, 1000);
    loadName();
}

init();