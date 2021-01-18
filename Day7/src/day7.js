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
    addPening(currentText);
    input.value = "";
}

function deleteText(event){
    const li = event.target.parentNode.parentNode;
    pendingUl.removeChild(li);
}

function addPening(text){
    const li = document.createElement('li');
    const planSave = document.createElement('span');
    planSave.classList.add('text');
    const checkSpan = document.createElement('span');
    const deleteSpan = document.createElement('span');
    deleteSpan.addEventListener('click',deleteText);
    checkSpan.innerHTML = `<i class="fas fa-check"></i>`;
    deleteSpan.innerHTML = `<i class="fas fa-times"></i>`;
    checkSpan.addEventListener('click',addFinished);
    planSave.innerHTML = text;
    addPendingObj(li, text);
    pendingUl.appendChild(li);
    li.appendChild(deleteSpan);
    li.appendChild(checkSpan);
    li.appendChild(planSave);
}

function addPendingObj(li, text){
    const pendingObj = {
        id : pendingArray.length + 1,
        text : text,
    }
    li.id = pendingObj.id;
    pendingArray.push(pendingObj);
    localStorage.setItem(PENDINGLS,[JSON.stringify(pendingArray)]);
}

function addFinished(event){
    const clickedNode = event.target.parentNode.parentNode;
    const getText = clickedNode.querySelector('span:nth-child(3)');
    const leftBtn = clickedNode.querySelector('span:nth-child(1)');
    leftBtn.innerHTML = `<i class="fas fa-angle-double-left"></i>`;
    leftBtn.addEventListener('click', sendTextToPending);
    const finishedObj = {
        id : finishedArray.length + 1,
        text : getText.textContent
    }
    finishedArray.push(finishedObj);
    finishedUl.appendChild(clickedNode);
    localStorage.setItem(FINISHEDLS,[JSON.stringify(finishedArray)]);
    // regenerate Pending Array
    const leftPendingArray = pendingArray.filter((todo) => {
        return todo.id != clickedNode.id;
    });
    pendingArray = leftPendingArray;
    localStorage.setItem(PENDINGLS,[JSON.stringify(pendingArray)]);
}

function sendTextToPending(event){
    const li = event.target.parentNode.parentNode;
    const leftBtn = li.querySelector('span:nth-child(1)');
    const text = li.querySelector('span:nth-child(3)').textContent;
    leftBtn.innerHTML = `<i class="fas fa-times"></i>`;
    pendingUl.appendChild(li);
    // regenerate Finished Array
    addPendingObj(li, text);
    const leftFinishedArray = finishedArray.filter((todo) => {
        return todo.id != li.id;
    });
    finishedArray = leftFinishedArray;
    localStorage.setItem(FINISHEDLS,[JSON.stringify(finishedArray)]);
}

function init(){
    form.addEventListener('submit',handleSubmit);
}

init();