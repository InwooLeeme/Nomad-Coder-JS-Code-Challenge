const toDoForm = document.querySelector(".toDoForm");
const toDoInput = document.querySelector(".toDoInput");
const toDoList = document.querySelector(".toDoList");

const toDoArray = [];

function handleSubmit(event){
    event.preventDefault();
    const currentToDos = toDoInput.value;
    toDoInput.value = "";
    addToDos(currentToDos);
}

function addToDos(toDos){
    const li = document.createElement("li");
    const checkBox = document.createElement("input");
    const span = document.createElement("span");
    const button = document.createElement("button");
    
    span.innerHTML = toDos;
    button.innerHTML = "❌";
    checkBox.type = "checkbox"; 
    checkBox.name = "name"; 
    checkBox.value = "value"; 
    checkBox.id = toDoArray.length + 1;
    toDoList.appendChild(li);
    li.appendChild(checkBox);
    li.appendChild(span);
    li.appendChild(button);
    const toDoObj = {
        id: toDoArray.length + 1,
        text : toDos,
    }
    toDoArray.push(toDoObj);
    console.table(toDoArray);
}

function controller(){
    toDoForm.addEventListener('submit', handleSubmit);
}

controller();