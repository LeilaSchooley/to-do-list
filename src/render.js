import component from "./createElement.js"
import {
    createEditForm
} from "./editSubmitTodo"


function renderHomepage() {

    document.body.appendChild(component(`<div class='flex-container'>
    <div id='side-panel'></div>

    <div id='main-area'></div>
    </div>`))

    let sidePanel = document.getElementById("side-panel")

    sidePanel.appendChild(component("<button id='new-todo' class='panel-button'>Add Task</button>"))

    sidePanel.appendChild(component("<button class='panel-button'>Important Stuff</button>"))

    sidePanel.appendChild(component("<button id='new-project' class='panel-button'>Add Project</button>"))


    sidePanel.appendChild(component(`<button id='all-projects' class='panel-button'>All Projects</button>`))
    sidePanel.appendChild(component(`<button id="Default Project" class="current-project panel-button project-buttons">Default Project</button>`))

}




let renderTodo = (toDoList) => {
    let flexMainContainer = document.getElementById("main-area")

    let toDoContainer = document.createElement("div")
    toDoContainer.className = "todo-container"


    toDoContainer.id = toDoList.id


    toDoContainer.appendChild(component(`

    <p class="edit-todo-${toDoList.id} todoname merge" id="${toDoList.id}">${toDoList.title}</p>

    <p class="merge delete">${toDoList.dueDate}</p>


    `))

    toDoContainer.appendChild(component(`<button id='${toDoList.id}' class='edit details-button-${toDoList.id}-edit hide-form'>Edit</button> 
    
    <button id='${toDoList.id}' class='details-button-${toDoList.id} delete-button-${toDoList.id} delete hide-form'>Delete</button>`))


    toDoContainer.appendChild(createEditForm(toDoList))

    flexMainContainer.appendChild(toDoContainer)

}



export {
    renderHomepage,
    renderTodo,

}