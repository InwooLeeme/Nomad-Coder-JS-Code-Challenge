// <⚠️ DONT DELETE THIS ⚠️>
//import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const body = document.querySelector('body');
const form = document.querySelector('.jsForm');
const input = form.querySelector('input');

let pendingArray = [];

function handleSubmit(event){
    event.preventDefault();
    const currentText = input.value;
    addPening(currentText);
    input.value = "";
}

function addPening(text){
    const pendingUl = document.querySelector(".pendingList");
    const li = document.createElement('li');
    const planSave = document.createElement('span');
    const checkSpan = document.createElement('span');
    const deleteSpan = document.createElement('span');
    checkSpan.innerHTML = `<i class="fas fa-check"></i>`;
    deleteSpan.innerHTML = `<i class="fas fa-times"></i>`;
    //span.addEventListener('click',handleClick);
    planSave.innerHTML = text;
    const pendingObj = {
        id : pendingArray.length + 1,
        text : text,
    }
    li.id = pendingObj.id;
    pendingArray.push(pendingObj);
    pendingUl.appendChild(li);
    li.appendChild(deleteSpan);
    li.appendChild(checkSpan);
    li.appendChild(planSave);
}
/* 
function handleClick(event){
    
} */

function init(){
    form.addEventListener('submit',handleSubmit);
}

init();