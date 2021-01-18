// <⚠️ DONT DELETE THIS ⚠️>
//import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const body = document.querySelector('body');
const form = document.querySelector('.jsForm');
const input = form.querySelector('input');

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

function addPening(text){
    const pendingUl = document.querySelector(".pendingList");
    const li = document.createElement('li');
    const planSave = document.createElement('span');
    planSave.classList.add('text');
    const checkSpan = document.createElement('span');
    const deleteSpan = document.createElement('span');
    checkSpan.innerHTML = `<i class="fas fa-check"></i>`;
    deleteSpan.innerHTML = `<i class="fas fa-times"></i>`;
    checkSpan.addEventListener('click',addFinished);
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
    console.log(pendingArray);
    localStorage.setItem(PENDINGLS,[JSON.stringify(pendingArray)]);
}

function addFinished(event){
    const finishedUl = document.querySelector('.finishedList');
    const clickedNode = event.target.parentNode.parentNode;
    const getText = clickedNode.querySelector('span:nth-child(3)');
    const leftBtn = clickedNode.querySelector('span:nth-child(1)');
    leftBtn.innerHTML = `<i class="fas fa-angle-double-left"></i>`;
    const finishedObj = {
        id : finishedArray.length + 1,
        text : getText.textContent
    }
    // regenerate Pending Array
    const leftPendingArray = pendingArray.filter((todo) => {
        return todo.id != clickedNode.id;
    });
    pendingArray = leftPendingArray;
    localStorage.setItem(PENDINGLS,[JSON.stringify(leftPendingArray)]);

    finishedArray.push(finishedObj);
    finishedUl.appendChild(clickedNode);
    localStorage.setItem(FINISHEDLS,[JSON.stringify(finishedArray)]);
}



function init(){
    form.addEventListener('submit',handleSubmit);
}

init();