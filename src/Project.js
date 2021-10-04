import component from "./createElement.js"
import {
    renderAllTodos
} from "./render"

let addProject = (name) => {
    let sidePanel = document.getElementById("side-panel")

    sidePanel.appendChild(component(`<button id='${name}' class='project-buttons panel-button' >${name}</button>`))

}

function createProjectButton(name) {
    let sidePanel = document.getElementById("side-panel")

    let button = document.createElement("button")
    button.id = name
    button.classList.add("current-project")
    button.classList.add("panel-button")
    button.classList.add("project-buttons")
    button.textContent = name

    sidePanel.appendChild(button)
}

function showAllProjects() {
    let allProjectsButton = document.getElementById("all-projects")
    allProjectsButton.addEventListener("click", () => renderAllTodos())


}

export {
    addProject,
    createProjectButton,
    showAllProjects

}