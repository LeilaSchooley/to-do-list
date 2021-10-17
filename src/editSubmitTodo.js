import { getProjectTodos } from "./index";
import component from "./createElement.js";

function createEditForm(toDoList) {
  return component(`
  <div id="editForm" class="modal">
  <div class="modal-content">
  <span class="editForm-close">&times;</span>

    <form>
        <ul class="flex-outer">

        <li>
        <label for="edit">Title</label>
        
        <input name="edit-title" id='edit-title' value='${toDoList.title}' required>
        </li>

        <li>

        <label for="edit-description">Description</label>

        <input id='edit-description' name="edit-description" value='${toDoList.description}' required>
        </li>

        <li>

        <label for="edit-dueDate">Due Date:</label>

        <input id='edit-dueDate' name="edit-dueDate" value='${toDoList.dueDate}' type='date'>
    </li>

    <li>

    <label for="priority">Priority</label>

      <select name="priority" id="priority" form="todoform">
          <option value="Normal">Normal</option>
          <option value="High">High</option>
      </select>

      <li>

      <label for="notes">Additional Notes</label>

        <textarea name="notes" id="notes" required></textarea>
        
        </li>
    </li>          

        <button id='edit-submit-todo'>Submit</button>

    </ul>
    </form>
    </div>

    </div>
    `);
}

function editSubmitTodo(toDoList) {
  let editSubmitButton = document.getElementById("edit-submit-todo");
  editSubmitButton.addEventListener("click", (e) => {
    e.preventDefault();
    let edit_title = document.getElementById("edit-title").value;

    if (edit_title != "") {
      let edit_description = document.getElementById("edit-description").value;
      let edit_dueDate = document.getElementById("edit-dueDate").value;
      let edit_priority = document.getElementById("edit-priority").value;

      toDoList.title = edit_title;
      toDoList.description = edit_description;
      toDoList.dueDate = edit_dueDate;
      toDoList.priority = edit_priority;
    } else {
      alert("Todo name can't be empty!");
    }
    getProjectTodos();
  });
}

export { editSubmitTodo, createEditForm };
