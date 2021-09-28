
import component from "./createElement.js"

let createToDoList = (title, description, dueDate, priority, id) => {
    
    return {title, description, dueDate, priority, id}
}

function createTodoForm(){
  
    
    document.body.appendChild(component(`
    <form name="todo-form" id="todo-form">
    <label>Title<input id='title' required></label>
    <label>Description<input id='description'></label>
    <label>Due Date:<input id='dueDate' type='date'></label>
    <label>Priority

    <select name="menu1" id="priority">
    <option>High</option>
    <option>Medium</option>
    <option>Low</option>
    </select>
    </label>
    <button id='submit-todo'>Submit</button>
    </form>`))
}




export {createToDoList, createTodoForm}

