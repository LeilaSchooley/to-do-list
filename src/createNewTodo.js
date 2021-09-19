import component from "./createElement.js"


let createToDoList = (title, description, dueDate, priority) => {
    
    return {title, description, dueDate, priority }
}

let allProjects = function() {
    this.projectName = []
}


function createNewTodo(){
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
        allProjects.defaultProject.push(newTodoList)


        

    })



}


function activeProjectName(){
    let allProjectsButton = document.querySelectorAll(".project-buttons")

    allProjectsButton.forEach((element) => element.addEventListener("click", () => {
        element.classList.toggle("current-project")

    }))
}


export {
    createNewTodo,
    allProjects
}