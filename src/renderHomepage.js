import component from "./createElement.js"

function renderHomepage(){

    
    document.body.appendChild(component("<h1 class='center'>To-Do-List</h1>"))
    
    
    document.body.appendChild(component("<button id='new-project'>Create New Project</button>"))
        

    document.body.appendChild(component("<button id='new-todo'>Create New Todo</button>"))


}

export default renderHomepage