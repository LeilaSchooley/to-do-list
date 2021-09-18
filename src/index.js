import component from "./createElement.js"
import './style.css';


let defaultProject = []

let createToDoList = (title, description, dueDate, priority) => {
    
    return {title, description, dueDate, priority }
}


let mainContent = document.createElement("div")

document.body.appendChild(component("<h1>To-Do-List</h1>"))

document.body.appendChild(component("<button id='projects'>Default</button>"))


document.body.appendChild(component("<button id='new-project'>Create New Project</button>"))

let newProjectsButton = document.getElementById("new-project")

newProjectsButton.addEventListener("click", () => {
    document.body.appendChild(component(`<label>Name of Project:<input id='project-name'></input></label>
    <button id='submit-project'>Submit New Project</button></label>`))


    document.body.appendChild(component(""))

})




let allProjectsButton = document.getElementById("projects")




document.body.appendChild(mainContent)

let headerTag = document.querySelector("h1")

headerTag.classList.add("center")


let createToDoListButton = document.createElement("button")

createToDoListButton.textContent="Create New Todo"

createToDoListButton.id="new-todo"
mainContent.appendChild(createToDoListButton)

let createToDoListButtonClick = document.getElementById("new-todo")
createToDoListButtonClick.addEventListener("click",() => {
    addNewTodo()
})


function addNewTodo(){
    document.body.appendChild(component("<label>Title<input id='title'></input></label>"))
    document.body.appendChild(component("<label>Description<input id='description'></input></label>"))
    document.body.appendChild(component("<label>dueDate<input id='dueDate'></input></label>"))
    document.body.appendChild(component("<label>Priority<input id='priority'></input></label>"))
    document.body.appendChild(component("<button id='submit-todo'>Submit</button>"))

    let todoSubmit = document.getElementById("submit-todo")

    todoSubmit.addEventListener("click",() => {
        let title = document.getElementById("title").value
        let description = document.getElementById("description").value
        let dueDate = document.getElementById("dueDate").value
        let priority = document.getElementById("priority").value

        let newTodoList = createToDoList (title, description, dueDate, priority)
        defaultProject.push(newTodoList)
        

    })



}

