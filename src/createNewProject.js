import component from "./createElement.js";
import {
    checkForElementID,
    getProjectName,
    removeAllProjectButtons
} from "./queryElements.js";
import {
    renderAllTodos
} from "./render"
import {
    allProjects,
    selectProject,
    getProjectTodos,
    saveProjectToLocalStorage
} from "./index";
import {
    changeModalState,
    setdisplayBlock
} from "./changeModalState";

function createProjectForm() {
    document.body.appendChild(component(`

    <div id="projectModal" class="modal side-panel">

    <div class="modal-content">

    <span class="projectModal-close">&times;</span>
    <form action="">
    <ul>

    <li>
    <label for='project-name'>Name of Project:</label>
    
    <input type="text" id='project-name' name='project-name' required>
    </li>

    <button type="submit" id='submit-project'>Submit</button>
    
    
    </ul>
    </form>
    
    </div>

    </div>
    `));
}

function createNewProject() {

    let newProjectsButton = document.getElementById("new-project");


    newProjectsButton.addEventListener("click", () => {

        if (checkForElementID("project-name")) {

            createProjectForm()

            setdisplayBlock("projectModal")
            changeModalState("projectModal")

            submitNewProject();

        }

    })


    function submitNewProject() {
        let submitProject = document.getElementById("submit-project");

        submitProject.addEventListener("click", (e) => {
            e.preventDefault()
            let projectName = document.getElementById("project-name").value;
            if (projectName != "") {

                allProjects[projectName] = [];

                saveProjectToLocalStorage(projectName);

                addAllProjects();
                selectProject();
                getProjectTodos();


            } else {
                alert("Project name can't be empty!")

            }

        });

    }

}

function addAllProjects() {
    let sidePanel = document.getElementById("side-panel")

    let activeProject = getProjectName()

    removeAllProjectButtons()

    for (let key in allProjects) {

        if (key === activeProject) {
            sidePanel.appendChild(component(`<button id='${key}' class='project-buttons panel-button current-project'>${key}</button>`))

        } else sidePanel.appendChild(component(`<button id='${key}' class='project-buttons panel-button'>${key}</button>`))


    }
}



function showAllProjects() {
    let allProjectsButton = document.getElementById("all-projects")
    allProjectsButton.addEventListener("click", () => renderAllTodos())


}

export {
    showAllProjects,
    createNewProject

}