let addTodoButton = document.getElementById("addTodoButton");



let todosCount = 0;
function onTodoStatusChange(checkboxId, labelId) {
    let checkboxElement = document.getElementById(checkboxId);
    let labelElement = document.getElementById(labelId);

    labelElement.classList.toggle('checked');
}
function onDeleteTodo(todoId) {
    console.log(todoId);
    let todoListItemEl = document.getElementById("todoListItem");

    let todoElement = document.getElementById(todoId);

    todoListItemEl.removeChild(todoElement);
}
function addItem(){
    let inputElement=document.getElementById("inputEl");

let userInputValue=inputElement.value;
if (userInputValue === ""){
    alert("Add Item Value");
    return;
}
todosCount = todosCount + 1;
let newTodo = {
    text: userInputValue,
    uniqueNo:todosCount,
   
}
createAndAppendTodo(newTodo);
inputElement.value = "";
}


function createAndAppendTodo(newTodo){
    let todoId = 'todo' + newTodo.uniqueNo;
    let checkboxId = 'checkbox' + newTodo.uniqueNo;
    let labelId = 'label' + newTodo.uniqueNo;

    console.log(newTodo);
    let todoListItemEl =document.getElementById("todoListItem");

    let liElement =document.createElement("li");
    liElement.classList.add("list-item");
    liElement.id = todoId;
    console.log( liElement.id);
    todoListItemEl.appendChild(liElement);

    let inputElement = document.createElement("input");
    inputElement.type = "checkbox";
    inputElement.id = checkboxId;
    inputElement.onclick = function() {
        onTodoStatusChange(checkboxId, labelId);
    };


    inputElement.classList.add("checkbox-input");
    liElement.appendChild(inputElement);

    let containerElement =document.createElement("div");
    containerElement.classList.add("inner-container");
    liElement.appendChild(containerElement);

    let labelElement = document.createElement("label");
    labelElement.setAttribute("for", checkboxId);
    labelElement.id = labelId;
    labelElement.classList.add("checkbox-label");
    labelElement.textContent = newTodo.text;
    containerElement.appendChild(labelElement);

    let deleteIconContainer = document.createElement("div");
    deleteIconContainer.classList.add("delete-icon-container");
    containerElement.appendChild(deleteIconContainer);

    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");

    deleteIcon.onclick = function() {
        onDeleteTodo(todoId);
    };


    deleteIconContainer.appendChild(deleteIcon);

}
for (let newTodo of todoList) {
    createAndAppendTodo(newTodo);
}
