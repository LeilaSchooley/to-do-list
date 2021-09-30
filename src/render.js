import component from "./createElement.js"

function renderHomepage(){    
    document.body.appendChild(component(`<div class='flex-container'>
    <div id='side-panel'></div>
    <div id='main-area'></div>
    </div>`))
    document.body.appendChild(component("<button id='new-project'>Add Project</button>"))
        

    document.body.appendChild(component("<button id='new-todo'>Add Task</button>"))


}

let renderTodo = (toDoList) => {

    let toDoContainer = document.createElement("div")
    toDoContainer.className="todo-container"
    toDoContainer.id=toDoList.id

    let toDoItem = document.createElement("p")
    toDoItem.textContent=`Title: ${toDoList.title} Due: ${toDoList.dueDate}`

    toDoContainer.appendChild(toDoItem)
    toDoContainer.appendChild(component(`<button id='${toDoList.id}' class='details-button'>View More Details</button> 
    <button id='${toDoList.id}' class='delete-button'>Delete Todo</button>`))


    toDoContainer.appendChild(component(`<div id="prompt-form-container" class='edit-todo-${toDoList.id} hide-form'>
    <form>
    <label>Title<input id='edit-title' value='${toDoList.title}'></label>

    <label>Description<input id='edit-description' value='${toDoList.description}'>
    <label>Due Date:<input id='edit-dueDate' value='${toDoList.dueDate}' type='date'></label>
    <label>Priority<input id='edit-priority' value='${toDoList.priority}'></label>
    <button id='edit-submit-todo'>Submit</button>
    </form>
    </div>`))

    

    document.body.appendChild(toDoContainer)

}



export {renderHomepage, 
    renderTodo
    
}