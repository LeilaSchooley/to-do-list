const randomID = require('@justinaz90/random-id-generator');

import component from "./createElement.js"
import {createTodoForm, renderHomepage, showDetailsForm} from "./render.js"
import {checkActiveProject, getProjectName, removeTodoContainer, removeClassList} from "./queryElements.js";
import {createToDoList, renderTodo} from "./createNewTodo.js";
import {addProject, createProjectButton} from "./Project.js"
import './style.css';

    
let allProjects = {}


allProjects[`Default Project`] = []


renderHomepage()

createProjectButton("Default Project") 

document.body.appendChild(component(`<button id='all-projects'>All Projects</button>`))

function showAllProjects(){
    let allProjectsButton = document.getElementById("all-projects")
    allProjectsButton.addEventListener("click", () => renderAll())


}


let selectProject = function(){
    let projectButtons = document.querySelectorAll(`.project-buttons`)
    projectButtons.forEach(element => element.addEventListener("click", () => {

        removeClassList()
        element.classList.toggle("current-project")
        getProjectTodos()

    }))
     
}

function getProjectTodos(){
    
    removeTodoContainer()
    let activeProject = getProjectName()

    if (activeProject === "All Projects") renderAll()

    else{
        allProjects[activeProject].forEach(element => {
            let newObj = element;
            renderTodo(newObj)
    
        })

    }

    viewAllDetails()
    deleteTodo()
    


}
function deleteTodo(){
    let alldeleteButtons = document.querySelectorAll('.delete-button')
    alldeleteButtons.forEach(element => element.addEventListener("click", () => {

        let activeProject = getProjectName()
        
            allProjects[activeProject].forEach((obj, index) => {
                if (obj.id == element.id) {
                    allProjects[activeProject].splice(index, 1)
                    console.log(allProjects[activeProject])
                    getProjectTodos()
                }

            })
           

    }))


}
function renderAll(){
    removeTodoContainer()

    let toDoContainer = document.createElement("div")
    toDoContainer.className="todo-container"


    for (let key in allProjects){
        allProjects[key].forEach(element => {
            let newObj = element;
            renderTodo(newObj)

        })

    }
    
    viewAllDetails()
    deleteTodo()
    

}
function createNewTodo(){

    createTodoForm()

    let todoSubmit = document.getElementById("submit-todo")

    todoSubmit.addEventListener("click",(e) => {
        e.preventDefault();

        let title = document.getElementById("title").value
        let description = document.getElementById("description").value
        let dueDate = document.getElementById("dueDate").value
        let priority = document.getElementById("priority").value

        let id = randomID(10);

        let newTodoList = createToDoList (title, description, dueDate, priority, id)

        if (checkActiveProject() === false){
            let currentProject = getProjectName()

             allProjects[`${currentProject}`].push(newTodoList)

             
             getProjectTodos()

            }
        
        else{
            
            allProjects["Default Project"].push(newTodoList)

            
            getProjectTodos()

        }


        
    })


}


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

        getProjectTodos()


    })

}


let viewAllDetails = () => {
    let alldetailButtons = document.querySelectorAll('.details-button')
    alldetailButtons.forEach(element => element.addEventListener("click",() => {
        
        for (let key in allProjects){
            allProjects[key].forEach(obj => {
                if (obj.id == element.id) {
                    
                    showDetailsForm(obj)
                    editSubmitTodo(obj)
                }

            })

        }    
    
    }))
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

            allProjects[`${projectName}`] = []
            addProject(projectName)
            selectProject()
            getProjectTodos()
        })

    }


}

createNewProject()
selectProject()
showAllProjects()


