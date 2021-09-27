
import component from "./createElement.js"

let createToDoList = (title, description, dueDate, priority, id) => {
    
    return {title, description, dueDate, priority, id}
}

let renderTodo = (toDoList) => {

    let toDoContainer = document.createElement("div")
    toDoContainer.className="todo-container"

    let toDoItem = document.createElement("p")
    toDoItem.textContent=`Title: ${toDoList.title} Due: ${toDoList.dueDate}`

    toDoContainer.appendChild(toDoItem)
    toDoContainer.appendChild(component(`<button id='${toDoList.id}' class='details-button'>View More Details</button> 
    <button id='${toDoList.id}' class='delete-button'>Delete Todo</button>`))
    document.body.appendChild(toDoContainer)

}

export {createToDoList, renderTodo}

