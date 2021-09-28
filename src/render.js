import component from "./createElement.js"
import { checkForElementID } from "./queryElements.js"
function renderHomepage(){


    
    document.body.appendChild(component("<h1 class='center'>To-Do-List</h1>"))
    
    
    document.body.appendChild(component("<button id='new-project'>Create New Project</button>"))
        

    document.body.appendChild(component("<button id='new-todo'>Create New Todo</button>"))


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


function showDetailsForm(toDoList){
        //let previousToDoContainer = document.querySelector(`div[id="${toDoList.id}"]`)

        let container = document.createElement("div")
        container.id=`edit-todo-${toDoList.id}`
        container.appendChild(component(`<div id="prompt-form-container">
        <form id="prompt-form">
        <label>Title<input id='edit-title' value='${toDoList.title}'></label>
    
        <label>Description<input id='edit-description' value='${toDoList.description}'>
        <label>Due Date:<input id='edit-dueDate' value='${toDoList.dueDate}' type='date'></label>
        <label>Priority<input id='edit-priority' value='${toDoList.priority}'></label>
        <button id='edit-submit-todo'>Submit</button>
        </form>
        </div>`))

        
        document.body.appendChild(container)
    }
    




export {renderHomepage, 
    showDetailsForm,
    renderTodo
    
}