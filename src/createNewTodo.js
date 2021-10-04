import component from "./createElement.js"

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
      <form name="form">
      <ul class="flex-outer">

          <li>
              <label for="title">Title</label>

              <input name="title" id='title'required>
          </li> 

          <li>

              <label for="description">Description</label>

              <input id='description' name="description" required>
          </li>

          <li>

              <label for="dueDate">Due Date:</label>

              <input id='dueDate' name="dueDate" type='date'>
          </li>

          <li>

              <label for="priority">Priority</label>

              <input id='priority' name="priority" required>
          </li>          
          
          <li>

              <label for="notes">Additional Notes</label>

              <input id='notes' name="notes" required>
          </li>

          <button id='submit-todo'>Submit</button>

      </ul>
      
  </form>

      </div>
    
    </div> 

`))


}




export {
    createToDoList,
    createTodoForm
}