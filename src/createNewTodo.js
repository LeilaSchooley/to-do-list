import component from "./createElement.js"






function activeProjectName(){
    let allProjectsButton = document.querySelectorAll(".project-buttons")

    allProjectsButton.forEach((element) => element.addEventListener("click", (e) => {
        
        e.target.classList.toggle("current-project")

        console.log("yes")

    }))
}


export default activeProjectName