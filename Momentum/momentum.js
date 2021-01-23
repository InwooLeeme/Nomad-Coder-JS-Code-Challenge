const clockContainer = document.querySelector('.clockContainer');
const clock = document.querySelector('.clock');

//console.log(clock, clockContainer);

function getTime(){
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    clock.innerHTML = `
        ${hour < 10 ? `0${hour}`:`${hour}`} : 
        ${minute < 10 ? `0${minute}`:`${minute}`} : 
        ${second < 10 ? `0${second}`:`${second}`}
    `;
}

function init(){
    setInterval(getTime, 1000);
}

init();