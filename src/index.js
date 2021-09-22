import component from "./createElement.js"
import {createTodoForm, renderHomepage} from "./renderHomepage.js"
import { removeClassList, queryClassList, getClassList} from "./classLists.js";

import './style.css';


let allProjects = []



let createToDoList = (title, description, dueDate, priority, index) => {
    
    const renderTodo = () => document.body.appendChild(component(`<p>Title: ${title}  Due: ${dueDate}</p>
        <button id='${index}'>View More Details</button>`))


        function showDetailsForm(){
  
            let container = document.createElement("div")
          
            container.appendChild(component(`<label>Title<input id='edit-title' value='${title}'></input></label>`))
            container.appendChild(component(`<label>Description<input id='edit-description' value='${description}'></input></label>`))
            container.appendChild(component(`<label>dueDate<input id='edit-dueDate' value='${dueDate}'></input></label>`))
            container.appendChild(component(`<label>Priority<input id='edit-priority' value='${priority}'></input></label>`))
            container.appendChild(component(`<button id='edit-submit-todo'>Submit</button>`))




            document.body.appendChild(container)
            editSubmitTodo()
        }

        let editSubmitTodo = () => {
            
            let editSubmitButton = document.getElementById("edit-submit-todo")
            editSubmitButton.addEventListener("click", () => {

                let edit_title = document.getElementById("edit-title").value
                let edit_description = document.getElementById("edit-description").value
                let edit_dueDate = document.getElementById("edit-dueDate").value
                let edit_priority = document.getElementById("edit-priority").value


                title = edit_title
                description = edit_description
                dueDate = edit_dueDate
                priority  = edit_priority

                console.log(title, description, dueDate, priority)
            })
    
    }


    const viewAllDetails = () => {
        let detailsButton = document.getElementById(index)
        detailsButton.addEventListener("click", () => {
            showDetailsForm()
        })
    }
    
    return {title, description, dueDate, priority, index, renderTodo, viewAllDetails}

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


let defaultProject = new Project("Default")
defaultProject.addProject()

allProjects.push(defaultProject)


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

let getTodoFormValues = () => {
    let title = document.getElementById("title").value
    let description = document.getElementById("description").value
    let dueDate = document.getElementById("dueDate").value
    let priority = document.getElementById("priority").value

}
let TodoFormValues = () => {
    let title = document.getElementById("title").value
    let description = document.getElementById("description").value
    let dueDate = document.getElementById("dueDate").value
    let priority = document.getElementById("priority").value

}

function createNewTodo(){

    createTodoForm()

    let todoSubmit = document.getElementById("submit-todo")

    todoSubmit.addEventListener("click",() => {

        let title = document.getElementById("title").value
        let description = document.getElementById("description").value
        let dueDate = document.getElementById("dueDate").value
        let priority = document.getElementById("priority").value
    
        if (queryClassList() === false){
            let currentProject = getClassList()

            allProjects.forEach((element, index) => {
                if (element.name === currentProject) {

                    let buttonIndex = element.array.length +1

                    let newTodoList = createToDoList (title, description, dueDate, priority, buttonIndex)

                    element.array.push(newTodoList);
                }
                
            })
        }
        else{
            let buttonIndex = allProjects[0].array.length +1

            let newTodoList = createToDoList (title, description, dueDate, priority, buttonIndex)

            allProjects[0].array.push(newTodoList)
            newTodoList.renderTodo()
            newTodoList.viewAllDetails()



        }


        
    })



}


