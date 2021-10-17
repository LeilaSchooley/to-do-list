let checkForElementID = (element) => document.getElementById(element) === null;

let checkActiveProject = () =>
  document.querySelector(".current-project") === null;

let getProjectName = () => document.querySelector(".current-project").innerText;

function removeTodoContainer() {
  if (document.querySelector(".todo-container") != null) {
    let allTodoContainers = document.querySelectorAll(".todo-container");
    allTodoContainers.forEach((element) =>
      element.parentNode.removeChild(element)
    );
  }
}

function removeClassList() {
  let projectclassList = document.querySelectorAll(".current-project");

  projectclassList.forEach((element) =>
    element.classList.remove("current-project")
  );
}

function removeAllProjectButtons() {
  let allProjectButtons = document.querySelectorAll(".project-buttons");
  allProjectButtons.forEach((element) =>
    element.parentNode.removeChild(element)
  );
}

export {
  removeClassList,
  checkActiveProject,
  getProjectName,
  removeTodoContainer,
  checkForElementID,
  removeAllProjectButtons,
};
