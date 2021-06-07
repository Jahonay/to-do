let todoArray = [];

const mainContainer = document.querySelector('.list-cont');
const header = document.querySelector("#title-input");
const description = document.querySelector("#description-input");
const add = document.querySelector("#add");
const del = document.querySelector('.close');

let tableParent, tableDisplay, todoCounter,
 todoDelete, todoDescription, todoTitle;

//create a table parent
window.onload = function(){
    tableParent= document.createElement('ul');
    tableParent.classList.add('tableContainer');
    mainContainer.appendChild(tableParent);
    tableParent.style.display="none";
}

function reset () {
    header.value = "";
    description.value = "";
}

//
// create the actual list table
//

function createTodoTable() {
    tableDisplay = document.createElement('li');
    todoCounter = document.createElement('span');
    todoTitle = document.createElement('span');
    todoDescription = document.createElement('span');
    todoDelete = document.createElement('span');

    //adding classes
    tableDisplay.classList.add('tableDisplay');
    todoCounter.classList.add('todoCounter');
    todoTitle.classList.add('todoTitle');
    todoDescription.classList.add('todoDescription');

    todoDelete.classList.add('todoDelete');
}

function printArray(){
    console.log('hi');
    tableParent.innerHTML = "";

    function removeElement(i){
        todoArray = todoArray.filter( ( _, z ) => z != i );
        printArray();
    }

    todoArray.map((value, i) =>{
        createTodoTable ();

        todoCounter.textContent = i+1;
        todoTitle.innerText = value.heading;
        todoDescription.innerText = value.content;

        tableDisplay.appendChild(todoCounter);
        tableDisplay.appendChild(todoTitle);
        tableDisplay.appendChild(todoDescription);
        tableDisplay.appendChild(todoDelete);

        todoDelete.addEventListener("click", () => removeElement(i));

        tableParent.appendChild(tableDisplay);
    });


}

add.addEventListener("click", function () {
    if (header.value !== "" && description.value !== ""){
        let tempObj = {};
        tempObj.heading= header.value;
        tempObj.content=description.value;

        todoArray= [...todoArray, tempObj];
        printArray();
        tableParent.style.display ="block";
    } else{
        alert("Please, Enter your to-do title and description")
    }
    reset();
});