import component from "./createElement.js"

function renderHomepage(){


    
    document.body.appendChild(component("<h1 class='center'>To-Do-List</h1>"))
    
    
    document.body.appendChild(component("<button id='new-project'>Create New Project</button>"))
        

    document.body.appendChild(component("<button id='new-todo'>Create New Todo</button>"))


}

function createTodoForm(){
    if (document.getElementById("title") != null){

    }
    else{
        //document.body.appendChild(component("<label>Title<input id='title'></label>"))
        //document.body.appendChild(component("<label>Description<input id='description'></label>"))
        //document.body.appendChild(component("<label>dueDate<input id='dueDate'></label>"))

        document.body.appendChild(component(`
        <form name="todo-form" id="todo-form">
        <label>Title<input id='title' required></label>
        <label>Description<input id='description'></label>
        <label>dueDate<input id='dueDate'></label>
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
}

function showDetailsForm(toDoList){

        let container = document.createElement("div")
        container.className="todo-container"
        container.appendChild(component(`<div id="prompt-form-container">
        <form id="prompt-form">
        <label>Title<input id='edit-title' value='${toDoList.title}'></label>
    
        <label>Description<input id='edit-description' value='${toDoList.description}'>
        <label>dueDate<input id='edit-dueDate' value='${toDoList.dueDate}'></label>
        <label>Priority<input id='edit-priority' value='${toDoList.priority}'></label>
        <button id='edit-submit-todo'>Submit</button>
        </form>
        </div>`))


        document.body.appendChild(container)
    }
    




export {renderHomepage, 
    createTodoForm, 
    showDetailsForm,
    
}