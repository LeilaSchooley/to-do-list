const randomID = require('@justinaz90/random-id-generator');

import {
    renderHomepage,
    renderTodo,
} from "./render.js"
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
    createNewProject
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

let checkForLocalStorage = (projectName) => JSON.parse(localStorage.getItem(projectName) == null)


function saveProjectToLocalStorage(projectName) {
    if (checkForLocalStorage(projectName) == true) {
        localStorage.setItem(projectName, JSON.stringify([]))

    }
}

function saveTodoToLocalStorage(projectName, newTodo) {

    let projectArray = JSON.parse(localStorage.getItem(projectName))
    projectArray.push(newTodo)
    localStorage.setItem(projectName, JSON.stringify(projectArray))

}

function updateProjectArray(projectName, array) {

    localStorage.removeItem(projectName)
    localStorage.setItem(projectName, JSON.stringify(array))


}

function renderProjectLocalStorage(projectName) {
    let newObjArray = JSON.parse(localStorage.getItem(projectName))
    newObjArray.forEach(element => renderTodo(element))

}


function renderAllTodosLocalStorage() {
    removeTodoContainer();

    Object.keys(localStorage).forEach(function (key) {
            let newObjArray = JSON.parse(localStorage.getItem(key));
            newObjArray.forEach(element => renderTodo(element))
        }

    );

}


saveProjectToLocalStorage("Default Project")


renderHomepage()

renderProjectLocalStorage("Default Project")
viewToDoDetails()

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

function deleteTodo(deleteButton, toDoList) {
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


        Object.keys(localStorage).forEach(function (key) {
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




let newTodoButton = document.getElementById("new-todo")
newTodoButton.addEventListener("click", () => createNewTodo())


createNewProject()
selectProject()
showAllProjects()

export {
    selectProject,
    getProjectTodos,
    viewToDoDetails,
    deleteTodo,
    saveProjectToLocalStorage,
    saveTodoToLocalStorage,
}