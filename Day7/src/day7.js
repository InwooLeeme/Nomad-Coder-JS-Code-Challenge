// <⚠️ DONT DELETE THIS ⚠️>
//import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const body = document.querySelector('body');
const form = document.querySelector('.jsForm');
const input = form.querySelector('input');
const finishedUl = document.querySelector('.finishedList');
const pendingUl = document.querySelector(".pendingList");

const PENDINGLS = "pending";
const FINISHEDLS = "finished";

let pendingArray = [];
let finishedArray = [];

function handleSubmit(event){
    event.preventDefault();
    const currentText = input.value;
    addPending(currentText);
    input.value = "";
}

function saveFinishedToDos(text){
    const finishedObj = {
        id : finishedArray.length + 1,
        text : text
    }
    finishedArray.push(finishedObj);
}

function switchBoard(event){
    if(event.path[2] === pendingUl){
        // switch to finished
        const li = event.path[1];
        const btn = event.path[0];
        btn.innerHTML = `⏪`;
        const text = li.firstChild.textContent;
        saveFinishedToDos(text);
        finishedUl.appendChild(li);
    }
    else{
        // switch to pending
        const li = event.path[1];
        const btn = event.path[0];
        btn.innerHTML =  `✅`;
        const text = li.firstChild.textContent;
        savePendingToDos(text);
        pendingUl.appendChild(li);
    }
    

}

function savePendingToDos(text){
    const pendingObj = {
        id : pendingArray.length + 1,
        text : text
    }
    pendingArray.push(pendingObj);
    
}

function addPending(text){
    const li = document.createElement('li');
    const span = document.createElement('span');
    const delBtn = document.createElement('button');
    const checkBtn = document.createElement('button');
    checkBtn.addEventListener('click', switchBoard);
    span.innerHTML = text;
    delBtn.innerHTML = `❌`;
    checkBtn.innerHTML = `✅`;
    savePendingToDos(text);
    pendingUl.appendChild(li);
    li.appendChild(span);
    li.appendChild(delBtn);
    li.appendChild(checkBtn);
}

function init(){
    form.addEventListener('submit',handleSubmit);
}

init();
