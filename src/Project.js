
import component from "./createElement.js"

let addProject= (name) => document.body.appendChild(component(`<button id='${name}' class='project-buttons' >${name}</button>`))
let createProjectButton = (name) => {
    
    let button = document.createElement("button")
    button.id=name
    button.classList.add("current-project")
    button.classList.add("project-buttons")
    button.textContent=name
    document.body.appendChild(button)
}


export {
    addProject,
    createProjectButton

}