import {
    renderTodo
} from "./render.js";
import {
    removeTodoContainer
} from "./queryElements.js";
import {
    allProjects,
    viewToDoDetails,
    deleteTodo
} from "./index";

export function renderAll() {
    removeTodoContainer();

    for (let key in allProjects) {
        allProjects[key].forEach(element => {
            let newObj = element;
            renderTodo(newObj);

        });

    }

    viewToDoDetails();
    deleteTodo();

}