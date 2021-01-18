// <⚠️ DONT DELETE THIS ⚠️>
//import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const form = document.querySelector('.jsForm');

//console.log(form);

function handleSubmit(event){
    event.preventDefault();
    
}

function init(){
    form.addEventListener('submit',handleSubmit);
}

init();