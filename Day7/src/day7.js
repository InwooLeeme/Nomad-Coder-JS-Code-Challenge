// <⚠️ DONT DELETE THIS ⚠️>
//import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const form = document.querySelector('.jsForm');
const input = form.querySelector('input');

//console.log(form);

function handleSubmit(event){
    event.preventDefault();
    const currentText = input.value;
    input.value = "";
}

function init(){
    form.addEventListener('submit',handleSubmit);
}

init();