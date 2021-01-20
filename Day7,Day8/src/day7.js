// <⚠️ DONT DELETE THIS ⚠️>
//import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const form = document.querySelector('.jsForm');
const input = form.querySelector('input');
const finishedUl = document.querySelector('.finishedList');
const pendingUl = document.querySelector(".pendingList");

const PENDINGLS = "pending";
const FINISHEDLS = "finished";

let pendingArray = [];
let finishedArray = [];

const listId = Date.now();

function handleSubmit(event){
    event.preventDefault();
    const currentText = input.value;
    addPending(currentText);
    input.value = "";
}

function saveFinishedToDos(li,text){
    const finishedObj = {
        id : listId,
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
        const text = li.querySelector('span').textContent;
        return todo.text !== text;
    });
    pendingArray = leftPending;
    savePending(pendingArray);
}

function updateFinishLS(li){
    const leftFinished = finishedArray.filter((todo) => {
        const text = li.querySelector('span').textContent;
        return todo.text !== text;
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
        id : listId,
        text : text
    }
    li.id = pendingObj.id;
    pendingArray.push(pendingObj);
    savePending(pendingArray);
}

function deleteToDos(event){
    if(event.path[2] === pendingUl){
        // delete in pending
        const li = event.path[1];
        pendingUl.removeChild(li); // remove in frontend
        updatePendingLS(li);    
    }
    else{
        // delete in finished
        const li = event.path[1];
        finishedUl.removeChild(li); // remove in frontend
        updateFinishLS(li);   
    }
}

function addPending(text){
    const li = document.createElement('li');
    const span = document.createElement('span');
    const delBtn = document.createElement('button');
    const checkBtn = document.createElement('button');
    checkBtn.addEventListener('click', switchBoard);        // switch boarding event
    delBtn.addEventListener('click', deleteToDos);          // delete to do list
    span.innerHTML = text;
    delBtn.innerHTML = `❌`;
    checkBtn.innerHTML = `✅`;
    savePendingToDos(li,text);
    pendingUl.appendChild(li);
    li.appendChild(span);
    li.appendChild(delBtn);
    li.appendChild(checkBtn);
}

function addFinished(text){
    const li = document.createElement('li');
    const span = document.createElement('span');
    const delBtn = document.createElement('button');
    const checkBtn = document.createElement('button');
    checkBtn.addEventListener("click", switchBoard);
    delBtn.addEventListener('click', deleteToDos);          // delete to do list
    span.innerHTML = text;
    delBtn.innerHTML = `❌`;
    checkBtn.innerHTML = `⏪`;
    saveFinishedToDos(li,text);
    finishedUl.appendChild(li);
    li.appendChild(span);
    li.appendChild(delBtn);
    li.appendChild(checkBtn);
}

function catchRefresh(){
    const leftPenArray = localStorage.getItem(PENDINGLS);
    const leftFinArray = localStorage.getItem(FINISHEDLS);
    // display left pending and finished
    if(leftPenArray !== null){
        const parsePending = JSON.parse(leftPenArray);
        parsePending.forEach((pending) => {
            addPending(pending.text);
        });
        const parseFinished = JSON.parse(leftFinArray);
        parseFinished.forEach((finished) => {
            addFinished(finished.text);
        });
    }
}

function init(){
    catchRefresh();
    form.addEventListener('submit',handleSubmit);
}

init();
