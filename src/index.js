import component from "./createElement.js"
import renderHomepage from "./renderHomepage.js"

import './style.css';


let allProjects = []



let createToDoList = (title, description, dueDate, priority) => {
    
    return {title, description, dueDate, priority }


}



class Project{
    constructor(name){
        this.name = name
        this.array = []
 }

  addProject(){


    document.body.appendChild(component(`<button id='${this.name}' class='project-buttons'>${this.name}</button>`))

}

removeProject(){
    let removeProject = document.getElementById(`${this.name}`)
    document.body.removeChild(removeProject)
}



 selectProject(){

    let projectButton = document.getElementById(`${this.name}`)

    projectButton.addEventListener("click", () =>  {
        
        removeClassList()

        projectButton.classList.toggle("current-project")



})

}



}

function removeClassList(){
    let projectclassList = document.querySelectorAll(".current-project")

    projectclassList.forEach((element) => element.classList.remove("current-project"))

}

function queryClassList(){
    let classList = document.querySelector(".current-project")
    return classList == null

}
function getClassList(){
    let classList = document.querySelector(".current-project")
    return classList.innerText



}


let newProject = new Project("Default")
newProject.addProject()
allProjects.push(newProject)
console.log(allProjects.length)

renderHomepage()

let createToDoListButtonClick = document.getElementById("new-todo")
createToDoListButtonClick.addEventListener("click",() => {
    createNewTodo()
})


function createNewProject(){
    let newProjectsButton = document.getElementById("new-project")


    newProjectsButton.addEventListener("click", () => {
        document.body.appendChild(component(`<label>Name of Project:<input id='project-name'></input></label>
        <button id='submit-project'>Submit New Project</button>`))
        submitNewProject()
    
    })

    
    function submitNewProject(){
        let submitProject = document.getElementById("submit-project")

        submitProject.addEventListener("click",() => {

            let projectName = document.getElementById("project-name").value
            let newProject = new Project(projectName)

            allProjects.push(newProject)

            newProject.addProject()
            newProject.selectProject()


                                    
        })

    }


}

createNewProject()

function createNewTodo(){
    document.body.appendChild(component("<label>Title<input id='title' placeholder='s'></input></label>"))
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

        if (queryClassList() === false){
            let currentProject = getClassList()
            allProjects.forEach(element => {
                if (element.name === currentProject){
                    element.array.push(newTodoList)
                    console.log(allProjects)
                }

            })
            

        }


        
    })



}


