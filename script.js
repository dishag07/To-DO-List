const clear = document.querySelector(".clear");
const dateElement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");

const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";


const options = {weekday : "long", month:"short", day:"numeric"}
const today = new Date();



dateElement.innerHTML = today.toLocaleDateString("en-US", options);

function addToDo(toDo, id, done, trash){
    const item = ` <li class="item">
    <i class="fa fa-circle-thin co" job="complete" id="${id}"></i> 
    < p class="text">${toDo}</p>
    <i class="fa fa-trash-o de" job="delete" id="${id}"></i>
    </li>
    `;
    const position = "beforeend";
    list.insertAdjacentHTML(position, item);
}

addToDo("drink coffee");

document.addEventListener("keyup", function(even){
    if(event.keyCode == 13){
        const toDo = input.value; 
        if(toDo){
            addToDo(toDo);
        }
    input.value = "";
    }

});