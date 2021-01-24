const toDoForm = document.querySelector(".toDoForm");
const toDoInput = document.querySelector(".toDoInput");
const toDoList = document.querySelector(".toDoList");

let toDoArray = [];
const TODOLS = "ToDos";

function handleSubmit(event){
    event.preventDefault();
    const currentToDos = toDoInput.value;
    toDoInput.value = "";
    addToDos(currentToDos);
}

function saveToDos(toDoArray){
    localStorage.setItem(TODOLS, toDoArray);
}

function deleteToDos(event){
    const li = event.path[1];
    toDoList.removeChild(li);
    deleteToDosInLs(li);
}

function deleteToDosInLs(li){
    let cleanToDos = toDoArray.filter((toDo) => {
        return toDo.id !== parseInt(li.id);
    });
    toDoArray = cleanToDos;
    saveToDos(JSON.stringify(toDoArray));
}

function addToDos(toDos){
    const li = document.createElement("li");
    const checkBox = document.createElement("input");
    const span = document.createElement("span");
    const button = document.createElement("button");
    span.innerHTML = toDos;
    button.innerHTML = "❌";
    button.addEventListener("click", deleteToDos);
    checkBox.type = "checkbox"; 
    checkBox.name = "name"; 
    checkBox.value = "value"; 
    /* checkBox.id = toDoArray.length + 1; */
    toDoList.appendChild(li);
    li.appendChild(checkBox);
    li.appendChild(span);
    li.appendChild(button);
    const toDoObj = {
        id: toDoArray.length + 1,
        text : toDos,
    }
    li.id = toDoObj.id;
    toDoArray.push(toDoObj);
    saveToDos(JSON.stringify(toDoArray));
}

function loadToDos(){
    const getToDos = localStorage.getItem(TODOLS);
    if(getToDos !== null){
        // toDoArray is not null
        const parseToDos = JSON.parse(getToDos);
        parseToDos.forEach((toDo) =>{
            addToDos(toDo.text);
        });
    }
}

function controller(){
    toDoForm.addEventListener('submit', handleSubmit);
    loadToDos();
}

controller();