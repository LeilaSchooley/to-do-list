import {
    renderTodo
} from "./render"
import {
    removeTodoContainer
} from "./queryElements"
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
    if (newObjArray != null) newObjArray.forEach(element => renderTodo(element))

}


function renderAllTodosLocalStorage() {
    removeTodoContainer();

    Object.keys(localStorage).forEach(function (key) {
            let newObjArray = JSON.parse(localStorage.getItem(key));
            newObjArray.forEach(element => renderTodo(element))
        }

    );

}

export {
    saveProjectToLocalStorage,
    saveTodoToLocalStorage,
    renderProjectLocalStorage,
    renderAllTodosLocalStorage,
    updateProjectArray,
    checkForLocalStorage
}