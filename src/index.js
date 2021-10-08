const randomID = require('@justinaz90/random-id-generator');

import component from "./createElement.js"
import {
    renderHomepage,
    renderTodo,
    renderAllTodos
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

let allProjects = {}


function saveProjectToLocalStorage(projectName) {
    localStorage.setItem(projectName, JSON.stringify([]))
}

function saveTodoToLocalStorage(projectName, newTodo) {
    let projectArray = JSON.parse(localStorage.getItem(projectName))
    projectArray.push(newTodo)
    localStorage.setItem(projectName, JSON.stringify(projectArray))

}

function renderLocalStorageTodos() {
    removeTodoContainer();

    Object.keys(localStorage).forEach(function (key) {
            let newObjArray = JSON.parse(localStorage.getItem(key));
            newObjArray.forEach(element => renderTodo(element))
        }

    );



}

function renderLocalStorageProjectTodos(projectName) {
    let newObjArray = JSON.parse((localStorage.getItem(projectName)))
    console.log(newObjArray)
    newObjArray.forEach(element => console.log(element))

}

function checkForLocalStorage() {
    if (JSON.parse(localStorage.getItem(""))) {

        allProjects = localStorage.getItem("allProjects")

    } else {

        allProjects[`Default Project`] = []

        addAllProjects()
        selectProject();
        getProjectTodos();

    }

    return currentArray
}
//checkForLocalStorage()

allProjects[`Default Project`] = []
//saveProjectToLocalStorage("Default Project")

renderHomepage()

//renderLocalStorageTodos()


//saveToLocalStorage()

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

    if (activeProject === "All Projects") renderAllTodos()

    else {

        renderLocalStorageProjectTodos()
        allProjects[activeProject].forEach(element => {
            let newObj = element;
            renderTodo(newObj)

        })

    }
    renderLocalStorageTodos()
    viewToDoDetails()
    deleteTodo()

}

function deleteTodo() {
    let alldeleteButtons = document.querySelectorAll('.delete-button')
    alldeleteButtons.forEach(element => element.addEventListener("click", () => {

        let activeProject = getProjectName()

        allProjects[activeProject].forEach((obj, index) => {
            if (obj.id == element.id) {
                allProjects[activeProject].splice(index, 1)
                //saveToLocalStorage()

                getProjectTodos()
            }

        })


    }))


}



function showTodoOptions(toDoList) {
    let editButton = document.getElementsByClassName(`details-button-${toDoList.id}`)[0]
    let deleteButton = document.getElementsByClassName(`details-button-${toDoList.id}-edit`)[0]
    editButton.classList.toggle("hide-form")
    deleteButton.classList.toggle("hide-form")

    showEditForm(toDoList)
}

function showEditForm(toDoList) {
    let editTodoButton = document.getElementsByClassName(`details-button-${toDoList.id}-edit`)[0]
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

        for (let key in allProjects) {

            allProjects[key].forEach(obj => {
                if (obj.id == element.id && checkForElementID(`edit-todo-${obj.id}`)) showTodoOptions(obj)

            })

        }
        deleteTodo()


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
    allProjects
}