import component from "./createElement.js"
import {createNewTodo, allProjects} from "./createNewTodo.js"
import './style.css';





function renderHomepage(){

    
    document.body.appendChild(component("<h1 class='center'>To-Do-List</h1>"))
    
    
    document.body.appendChild(component("<button id='new-project'>Create New Project</button>"))
    
    document.body.appendChild(component("<button id='projects' class='project-buttons'>Default</button>"))
    

    document.body.appendChild(component("<button id='new-todo'>Create New Todo</button>"))


    let createToDoListButtonClick = document.getElementById("new-todo")
    createToDoListButtonClick.addEventListener("click",() => {
        createNewTodo()
    })
    
}
renderHomepage()

    

function createNewProject(){
    let newProjectsButton = document.getElementById("new-project")


    newProjectsButton.addEventListener("click", () => {
        document.body.appendChild(component(`<label>Name of Project:<input id='project-name'></input></label>
        <button id='submit-project'>Submit New Project</button></label>`))
        submitNewProject()
    
    })


}

function submitNewProject(){
    let submitProject = document.getElementById("submit-project")

    submitProject.addEventListener("click",() => {
        let projectName = document.getElementById("project-name").value
        allProjects[`${projectName}`] = []
        document.body.appendChild(component(`<button id='${projectName}' class='project-buttons'>${projectName}</button>`))
        activeProjectName()
                                
    })

}

createNewProject()
