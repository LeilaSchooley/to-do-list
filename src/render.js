import component from "./createElement.js";
import { createEditForm } from "./editSubmitTodo";

let renderTodo = (toDoList) => {
  let flexMainContainer = document.getElementById("main-area");

  let toDoContainer = document.createElement("div");
  toDoContainer.className = "todo-container";

  toDoContainer.id = toDoList.id;

  toDoContainer.appendChild(
    component(`

    <p class="edit-todo-${toDoList.id} todoname merge" id="${toDoList.id}">${toDoList.title}</p>

    <p class="merge delete">${toDoList.dueDate}</p>


    `)
  );

  toDoContainer.appendChild(
    component(`<button id='${toDoList.id}' class='edit details-button-${toDoList.id}-edit hide-form'>Edit</button> 
    
    <button id='${toDoList.id}' class='details-button-${toDoList.id} delete-button-${toDoList.id} delete hide-form'>Delete</button>`)
  );

  toDoContainer.appendChild(createEditForm(toDoList));

  flexMainContainer.appendChild(toDoContainer);
};

export { renderTodo };
