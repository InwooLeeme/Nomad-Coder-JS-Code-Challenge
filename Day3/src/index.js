// <⚠️ DONT DELETE THIS ⚠️>
//import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>
const h2 = document.querySelector('h2');
/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/
function handleMouseOn(){
    h2.innerHTML = `The mouse is here!`;
    h2.style.color = colors[0];
}

function mouseLeave(){
    h2.innerHTML = `The mouse is gone!`;
    h2.style.color = colors[1];
}

const superEventHandler = {
    mouseEnter : h2.addEventListener('mouseenter',handleMouseOn),
    mouseLeave : h2.addEventListener('mouseleave',mouseLeave),
};