import component from "./createElement.js";
import {
    checkForElementID
} from "./queryElements.js";
import {
    addProject
} from "./Project.js";
import {
    allProjects,
    selectProject,
    getProjectTodos
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

export function createNewProject() {

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
                addProject(projectName);
                selectProject();
                getProjectTodos();


            } else {
                alert("Project name can't be empty!")

            }

        });

    }

}