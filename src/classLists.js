function removeClassList(){
    let projectclassList = document.querySelectorAll(".current-project")

    projectclassList.forEach((element) => element.classList.remove("current-project"))

}

function queryClassList(){
    let classList = document.querySelector(".current-project")
    return classList == null

}
function getClassList(){
    let classList = document.querySelector(".current-project")
    return classList.innerText



}

export {
    removeClassList,
    getClassList,
    queryClassList
}