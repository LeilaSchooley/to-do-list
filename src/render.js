import component from "./createElement.js"

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

let renderTodo = (toDoList) => {
    let flexMainContainer = document.getElementById("main-area")

    let toDoContainer = document.createElement("div")
    toDoContainer.className = "todo-container"
    toDoContainer.id = toDoList.id

    let toDoItem = document.createElement("p")
    toDoItem.textContent = `Title: ${toDoList.title} Due: ${toDoList.dueDate}`

    toDoContainer.appendChild(toDoItem)

    toDoContainer.appendChild(component(`<button id='${toDoList.id}' class='details-button'>View More Details</button> 
    <button id='${toDoList.id}' class='delete-button'>Delete Todo</button>`))


    toDoContainer.appendChild(component(`
    
    <form>
        <ul class="flex-outer">

        <li>
        <label for="edit">Title</label>
        
        <input name="edit-title" id='edit-title' value='${toDoList.title}' required>
        </li>

        <li>

        <label for="edit-description">Description</label>

        <input id='edit-description' name="edit-description" value='${toDoList.description}' required>
        </li>

        <li>

        <label for="edit-dueDate">Due Date:</label>

        <input id='edit-dueDate' name="edit-dueDate" value='${toDoList.dueDate}' type='date'>
    </li>

    <li>

        <label for="edit-priority">Priority</label>

        <input id='edit-priority' name="edit-priority" value='${toDoList.priority}' required>
    </li>

        <button id='edit-submit-todo'>Submit</button>

    </ul>
    </form>
    `))


    flexMainContainer.appendChild(toDoContainer)

}



export {
    renderHomepage,
    renderTodo

}