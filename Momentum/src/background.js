const body = document.querySelector("body");

const maxImages = 7;

function genRandNumber(){
    const number = Math.floor(Math.random() * maxImages + 1);
    return number;
}

function changeBg(){
    const image = new Image();
    const randNumber = genRandNumber();
    image.src = `./images/${randNumber}.jpg`;
    body.appendChild(image);
}

changeBg();