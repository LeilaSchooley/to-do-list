import component from "./createElement.js"

let createToDoList = (title, description, dueDate, priority, id) => {

    return {
        title,
        description,
        dueDate,
        priority,
        id
    }
}

function createTodoForm() {


    document.body.appendChild(component(`

    <!-- Trigger/Open The Modal -->
    
    <!-- The Modal -->
    <div id="myModal" class="modal">
    
      <!-- Modal content -->
      <div class="modal-content">
      <span class="close">&times;</span>
      <form>
      <ul class="flex-outer">

          <li>
              <label for="title">Title</label>

              <input name="title" id='title' required>
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