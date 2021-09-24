import component from "./createElement.js"
import {createTodoForm, renderHomepage} from "./renderHomepage.js"
import { removeClassList, queryClassList, getClassList} from "./classLists.js";
import createToDoList from "./createNewTodo.js";
import './style.css';

let allProjects = []

function Project(name){
    let array = []

    let addProject = () => document.body.appendChild(component(`<button id='${name}' class='project-buttons'>${name}</button>`))

    function removeProject(){
        let removeProject = document.getElementById(`${name}`)
        document.body.removeChild(removeProject)
    }
    
    function selectProject(){
        let projectButton = document.getElementById(`${name}`)
        projectButton.addEventListener("click", () =>  {
            removeClassList()
            projectButton.classList.toggle("current-project")
    
    })
    
    }

    return {name, array, addProject, removeProject, selectProject}
 }


let defaultProject = new Project("Default")
defaultProject.addProject()

allProjects.push(defaultProject)
renderHomepage()


function renderAll(){
    

    if (checkForContainer() == null){

        let toDoContainer = document.createElement("div")
        toDoContainer.id="todo-container"
    
        allProjects.forEach(element => {
            for (let i=0; i < element.array.length; i++){
                let toDoList = element.array[i]
                renderTodo(toDoList)

            }

        })
        viewAllDetails()
        }
        
    else{

        let allTodoContainers = document.querySelectorAll(".todo-container")
        allTodoContainers.forEach(element => document.body.removeChild(element))

        let toDoContainer = document.createElement("div")
        toDoContainer.className="todo-container"
    
        allProjects.forEach(element => {
            for (let i=0; i < element.array.length; i++){
                let toDoList = element.array[i]
                renderTodo(toDoList)
            }

        })
    }


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

                    let buttonIndex = element.array.length

                    let newTodoList = createToDoList (title, description, dueDate, priority, buttonIndex)

                    element.array.push(newTodoList);
                }
                
            })
        }
        else{
            
            let buttonIndex = allProjects[0].array.length

            
            let newTodoList = createToDoList (title, description, dueDate, priority, buttonIndex)
            allProjects[0].array.push(newTodoList)

            renderAll()

        }


        
    })


}





let checkForContainer = () => document.querySelector(".todo-container")



let editSubmitTodo = (toDoList) => {
            
    let editSubmitButton = document.getElementById("edit-submit-todo")
    editSubmitButton.addEventListener("click", () => {

        let edit_title = document.getElementById("edit-title").value
        let edit_description = document.getElementById("edit-description").value
        let edit_dueDate = document.getElementById("edit-dueDate").value
        let edit_priority = document.getElementById("edit-priority").value


        toDoList.title = edit_title
        toDoList.description = edit_description
        toDoList.dueDate = edit_dueDate
        toDoList.priority  = edit_priority


    })

}


let viewAllDetails = () => {
    let alldetailButtons = document.querySelectorAll('.details-button')
    alldetailButtons.forEach((element) => element.addEventListener("click",() => {
        console.log(element)
    }))
}

let renderTodo = (toDoList) => {

    let toDoContainer = document.createElement("div")
    toDoContainer.className="todo-container"

    let toDoItem = document.createElement("p")
    toDoItem.textContent=`Title: ${toDoList.title} Due: ${toDoList.dueDate}`

    toDoContainer.appendChild(toDoItem)
    toDoContainer.appendChild(component(`<button id='${toDoList.index}' class='details-button'>View More Details</button>`))
    document.body.appendChild(toDoContainer)

}



let createToDoListButtonClick = document.getElementById("new-todo")
createToDoListButtonClick.addEventListener("click",() => createNewTodo())


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




