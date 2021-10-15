import {
    saveProjectToLocalStorage,
    renderProjectLocalStorage,
    renderAllTodosLocalStorage,
    updateProjectArray,
} from "./localStorage"
import {
    clickImportantStuff,
    showByWeek
} from "./arrangeTodos"
import {
    getProjectName,
    removeTodoContainer,
    removeClassList,
    checkForElementID
} from "./queryElements.js";
import {
    createNewTodo
} from "./createNewTodo.js";
import {
    showAllProjects,
    createNewProject,
    addAllProjects
} from "./createNewProject.js"
import './style.css';

import {
    changeModalState,
    setdisplayBlock
} from "./changeModalState";
import {
    editSubmitTodo,
    createEditForm
} from "./editSubmitTodo";



saveProjectToLocalStorage("Default Project")
renderProjectLocalStorage("Default Project")
viewToDoDetails()
addAllProjects()

let newTodoButton = document.getElementById("new-todo")
newTodoButton.addEventListener("click", () => createNewTodo())

function selectProject() {
    let projectButtons = document.querySelectorAll(`.project-buttons`)
    projectButtons.forEach(element => element.addEventListener("click", () => {

        removeClassList()
        element.classList.toggle("current-project")
        getProjectTodos()
    }))

}

function getProjectTodos() {

    removeTodoContainer()

    let activeProject = getProjectName()

    if (activeProject === "All Projects") renderAllTodosLocalStorage()

    else renderProjectLocalStorage(activeProject)

    viewToDoDetails()

}

function deleteTodo(deleteButton) {
    deleteButton.addEventListener("click", (e) => {

        let activeProject = getProjectName()

        let localStorageProject = JSON.parse(localStorage.getItem(activeProject))
        localStorageProject.forEach((obj, index) => {

            if (obj.id === e.target.id) {
                localStorageProject.splice(index, 1)
                updateProjectArray(activeProject, localStorageProject)
                getProjectTodos()
            }

        })


    })


}



function showTodoOptions(toDoList) {

    let deleteButton = document.getElementsByClassName(`details-button-${toDoList.id}`)[0]
    let editButton = document.getElementsByClassName(`details-button-${toDoList.id}-edit`)[0]
    editButton.classList.toggle("hide-form")
    deleteButton.classList.toggle("hide-form")

    showEditForm(editButton, toDoList)
    deleteTodo(deleteButton, toDoList)

}

function showEditForm(editTodoButton, toDoList) {
    editTodoButton.addEventListener("click", () => {

            document.body.appendChild(createEditForm(toDoList))
            setdisplayBlock("editForm")
            changeModalState("editForm")
            editSubmitTodo(toDoList)

        }



    )


}

function viewToDoDetails() {

    let alldetailButtons = document.querySelectorAll('.merge')

    alldetailButtons.forEach(element => element.addEventListener("click", () => {


        Object.keys(localStorage).forEach(key => {
                let newObjArray = JSON.parse(localStorage.getItem(key));
                newObjArray.forEach(obj => {

                    if (obj.id === element.id && checkForElementID(`edit-todo-${obj.id}`)) {
                        showTodoOptions(obj)

                    }

                })
            }

        );




    }))
}


createNewProject()
selectProject()
showAllProjects()
clickImportantStuff()
showByWeek()

export {
    selectProject,
    getProjectTodos,
    viewToDoDetails,
    deleteTodo

}