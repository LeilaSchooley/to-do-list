import component from "./createElement.js"
import {
    createEditForm
} from "./editSubmitTodo"
import {
    removeTodoContainer
} from "./queryElements"
import {
    allProjects,
    viewToDoDetails,
    deleteTodo
} from "./index"


function renderHomepage() {
    document.body.appendChild(component(`<div class='flex-container'>
    <div id='side-panel'></div>

    <div id='main-area'></div>
    </div>`))

    let flexContainer = document.getElementById("side-panel")
    flexContainer.appendChild(component("<button id='new-todo' class='panel-button'>Add Task</button>"))

    flexContainer.appendChild(component("<button class='panel-button'>Important Stuff</button>"))

    flexContainer.appendChild(component("<button id='new-project' class='panel-button'>Add Project</button>"))

}



function renderAllTodos() {
    removeTodoContainer();

    for (let key in allProjects) {
        allProjects[key].forEach(element => {
            let newObj = element;
            renderTodo(newObj);

        });

    }

    viewToDoDetails();
    deleteTodo();

}

let renderTodo = (toDoList) => {
    let flexMainContainer = document.getElementById("main-area")

    let toDoContainer = document.createElement("div")

    toDoContainer.className = "todo-container"
    toDoContainer.id = toDoList.id

    toDoContainer.appendChild(component(`<ul> <li>
    
    <p class="edit-todo-${toDoList.id} merge" id="${toDoList.id}">${toDoList.title}</p> 
    
    ${toDoList.dueDate}
    </li>
    </ul>`))
    //toDoContainer.appendChild(component(`<p class="merge">${toDoList.dueDate}</p>`))

    toDoContainer.appendChild(component(`<button id='${toDoList.id}' class='edit details-button-${toDoList.id} hide-form'>Edit</button> 
    <button id='${toDoList.id}' class='details-button-${toDoList.id} delete-button hide-form'>Delete</button>`))


    toDoContainer.appendChild(createEditForm(toDoList))

    flexMainContainer.appendChild(toDoContainer)

}



export {
    renderHomepage,
    renderTodo,
    renderAllTodos

}