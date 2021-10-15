import component from "./createElement.js"
const randomID = require('@justinaz90/random-id-generator');
import {
    getProjectName,
    checkForElementID
} from "./queryElements.js";
import {
    saveTodoToLocalStorage
} from "./localStorage"
import {
    changeModalState,
    setdisplayBlock
} from "./changeModalState";
import {
    getProjectTodos
} from "./index";


let createToDoList = (title, description, dueDate, priority, id, notes) => {

    return {
        title,
        description,
        dueDate,
        priority,
        id,
        notes
    }
}


function createTodoForm() {


    document.body.appendChild(component(`

    <div id="todoModal" class="modal side-panel">
    
      <div class="modal-content">

      <span class="todoModal-close">&times;</span>
      <form name="todoform">
      <ul class="flex-outer">

          <li>
              <label for="title">Title</label>

              <input name="title" id='title' required>
          </li> 

          <li>

              <label for="description">Description</label>

              <input id='description' name="description">
          </li>

          <li>

              <label for="dueDate">Due Date:</label>

              <input id='dueDate' name="dueDate" type='date'>
          </li>

          <li>

              <label for="priority">Priority</label>

                <select name="priority" id="priority" form="todoform">
                    <option value="Normal">Normal</option>
                    <option value="High">High</option>
                </select>

          </li>          
          
          <li>

              <label for="notes">Additional Notes</label>

            <textarea name="notes" id="notes" required></textarea>
            </li>

          <button id='submit-todo'>Submit</button>

      </ul>
      
  </form>

      </div>
    
    </div> 

`))


}


function createNewTodo() {
    if (checkForElementID("title")) {

        createTodoForm();

        setdisplayBlock("todoModal");
        changeModalState("todoModal");


        let todoSubmit = document.getElementById("submit-todo");

        todoSubmit.addEventListener("click", (e) => {

            let title = document.getElementById("title").value;
            if (title != "") {

                let description = document.getElementById("description").value;
                let dueDate = document.getElementById("dueDate").value;
                let priority = document.getElementById("priority").value;
                let notes = document.getElementById("notes").value;


                let id = randomID(10);

                if (dueDate == "") dueDate = "No due date";

                let newTodoList = createToDoList(title, description, dueDate, priority, id, notes);

                let currentProject = getProjectName();

                saveTodoToLocalStorage(currentProject, newTodoList)

                getProjectTodos();

            } else
                alert("Todo name can't be empty!");

            e.preventDefault();

        });



    }
}




export {
    createToDoList,
    createTodoForm,
    createNewTodo
}