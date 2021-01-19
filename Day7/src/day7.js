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

function saveFinishedToDos(li,text){
    const finishedObj = {
        id : finishedArray.length + 1,
        text : text
    }
    li.id = finishedObj.id;
    finishedArray.push(finishedObj);
    saveFinish(finishedArray);
}

function saveFinish(){
    localStorage.setItem(FINISHEDLS, [JSON.stringify(finishedArray)]);
}

function updatePendingLS(li){
    const leftPending = pendingArray.filter((todo) => {
        return todo.id !== parseInt(li.id);
    });
    pendingArray = leftPending;
    savePending(pendingArray);
}

function updateFinishLS(li){
    const leftFinished = finishedArray.filter((todo) => {
        return todo.id !== parseInt(li.id);
    });
    finishedArray = leftFinished;
    saveFinish(finishedArray);
}

function switchBoard(event){
    if(event.path[2] === pendingUl){
        // switch to finished
        const li = event.path[1];
        const btn = event.path[0];
        btn.innerHTML = `⏪`;
        const text = li.firstChild.textContent;
        saveFinishedToDos(li, text);
        // Update local storage
        updatePendingLS(li);
        finishedUl.appendChild(li);
    }
    else{
        // switch to pending
        const li = event.path[1];
        const btn = event.path[0];
        btn.innerHTML =  `✅`;
        const text = li.firstChild.textContent;
        savePendingToDos(li,text);
        // Update local storage
        updateFinishLS(li);
        pendingUl.appendChild(li);
    }
}

function savePending(array){
    localStorage.setItem(PENDINGLS, [JSON.stringify(array)]);
}

function savePendingToDos(li,text){
    const pendingObj = {
        id : pendingArray.length + 1,
        text : text
    }
    li.id = pendingObj.id;
    pendingArray.push(pendingObj);
    savePending(pendingArray);
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
    savePendingToDos(li,text);
    pendingUl.appendChild(li);
    li.appendChild(span);
    li.appendChild(delBtn);
    li.appendChild(checkBtn);
}

function init(){
    form.addEventListener('submit',handleSubmit);
}

init();
