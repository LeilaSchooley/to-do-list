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
        document.body.appendChild(component("<label>Title<input id='title'></input></label>"))
        document.body.appendChild(component("<label>Description<input id='description'></input></label>"))
        document.body.appendChild(component("<label>dueDate<input id='dueDate'></input></label>"))
        document.body.appendChild(component("<label>Priority<input id='priority'></input></label>"))
        document.body.appendChild(component("<button id='submit-todo'>Submit</button>"))
    
    }





}

export {renderHomepage, createTodoForm}