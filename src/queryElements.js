let checkForElementID = (element) => document.getElementById(element) === null

let checkActiveProject = () => document.querySelector(".current-project") === null

let getProjectName = () => document.querySelector(".current-project").innerText

function removeTodoContainer() {

    if (document.querySelector(".todo-container") != null) {
        let flexMainContainer = document.getElementById("main-area")

        let allTodoContainers = document.querySelectorAll(".todo-container")
        allTodoContainers.forEach(element => flexMainContainer.removeChild(element))
    }
}

function removeClassList() {
    let projectclassList = document.querySelectorAll(".current-project")

    projectclassList.forEach((element) => element.classList.remove("current-project"))

}


export {
    removeClassList,
    checkActiveProject,
    getProjectName,
    removeTodoContainer,
    checkForElementID
}