function removeClassList(){
    let projectclassList = document.querySelectorAll(".current-project")

    projectclassList.forEach((element) => element.classList.remove("current-project"))

}

function removeTodoContainer(){
    if (document.querySelector(".todo-container") != null){

        let allTodoContainers = document.querySelectorAll(".todo-container")
        allTodoContainers.forEach(element => document.body.removeChild(element))

    

}}

function checkActiveProject(){
    let classList = document.querySelector(".current-project")
    return classList == null

}
function getProjectName(){
    let classList = document.querySelector(".current-project")
    return classList.innerText



}


export {
    removeClassList,
    checkActiveProject,
    getProjectName,
    removeTodoContainer
}