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
    createTodoForm,
    createToDoList
} from "./createNewTodo.js";
import {
    createProjectButton,
    showAllProjects
} from "./Project.js"
import './style.css';
import {
    createNewProject
} from "./createNewProject";
import {
    changeModalState,
    setdisplayBlock
} from "./changeModalState";
import {
    editSubmitTodo,
    createEditForm
} from "./editSubmitTodo";

export let allProjects = {}

allProjects[`Default Project`] = []


renderHomepage()

createProjectButton("Default Project")

let sidePanel = document.getElementById("side-panel")
sidePanel.appendChild(component(`<button id='all-projects' class='panel-button'>All Projects</button>`))




export let selectProject = function () {
    let projectButtons = document.querySelectorAll(`.project-buttons`)
    projectButtons.forEach(element => element.addEventListener("click", () => {

        removeClassList()
        element.classList.toggle("current-project")
        getProjectTodos()

    }))

}

export function getProjectTodos() {

    removeTodoContainer()

    let activeProject = getProjectName()

    if (activeProject === "All Projects") renderAllTodos()

    else {
        allProjects[activeProject].forEach(element => {
            let newObj = element;
            renderTodo(newObj)

        })

    }

    viewToDoDetails()
    deleteTodo()

}

export function deleteTodo() {
    let alldeleteButtons = document.querySelectorAll('.delete-button')
    alldeleteButtons.forEach(element => element.addEventListener("click", () => {

        let activeProject = getProjectName()

        allProjects[activeProject].forEach((obj, index) => {
            if (obj.id == element.id) {
                allProjects[activeProject].splice(index, 1)
                getProjectTodos()
            }

        })


    }))


}



function createNewTodo() {
    if (checkForElementID("title")) {

        createTodoForm()

        setdisplayBlock("todoModal")
        changeModalState("todoModal")


        let todoSubmit = document.getElementById("submit-todo")

        todoSubmit.addEventListener("click", (e) => {

            let title = document.getElementById("title").value
            if (title != "") {

                let description = document.getElementById("description").value
                let dueDate = document.getElementById("dueDate").value
                let priority = document.getElementById("priority").value
                let notes = document.getElementById("notes").value


                let id = randomID(10);

                let newTodoList = createToDoList(title, description, dueDate, priority, id, notes)

                let currentProject = getProjectName()

                allProjects[currentProject].push(newTodoList)

                getProjectTodos()

            } else alert("Todo name can't be empty!")

            e.preventDefault();

        })



    }
}

function showTodoOptions(toDoList) {
    let todoButton = document.querySelectorAll(`.details-button-${toDoList.id}`)
    todoButton.forEach(element => element.classList.toggle("hide-form"))

    showEditForm(toDoList)
}

function showEditForm(toDoList) {
    let todoButtonEdits = document.querySelectorAll(".edit")
    todoButtonEdits.forEach(element => element.addEventListener("click", () => {
            document.body.appendChild(createEditForm(toDoList))
            setdisplayBlock("editForm")
            changeModalState("editForm")
            editSubmitTodo(toDoList)

        }



    ))


}

export let viewToDoDetails = () => {

    let alldetailButtons = document.querySelectorAll('.merge')

    alldetailButtons.forEach(element => element.addEventListener("click", () => {

        for (let key in allProjects) {
            allProjects[key].forEach(obj => {
                if (obj.id == element.id) {

                    if (checkForElementID(`edit-todo-${obj.id}`)) {

                        showTodoOptions(obj)

                    }

                }

            })

        }
        deleteTodo()


    }))
}




let createToDoListButtonClick = document.getElementById("new-todo")
createToDoListButtonClick.addEventListener("click", () => createNewTodo())


createNewProject()
selectProject()
showAllProjects()