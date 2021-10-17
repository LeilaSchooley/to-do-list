import { removeTodoContainer } from "./queryElements";
import { renderTodo } from "./render";
import { viewToDoDetails } from "./index";
import format from "date-fns/format";
import endOfDay from "date-fns/endOfDay";
import differenceInCalendarDays from "date-fns/differenceInCalendarDays";

function clickImportantStuff() {
  let importantStuffButton = document.getElementById("important-stuff");
  importantStuffButton.addEventListener("click", () => {
    showImportantStuff();
    viewToDoDetails();
  });
}

function showImportantStuff() {
  removeTodoContainer();

  Object.keys(localStorage).forEach((key) => {
    let newObjArray = JSON.parse(localStorage.getItem(key));
    newObjArray.forEach((element) => {
      if (element.priority == "High") renderTodo(element);
    });
  });
}

function showByWeek() {
  let weekButton = document.getElementById("seven-days");
  weekButton.addEventListener("click", () => {
    arrangeByWeek();
    viewToDoDetails();
  });
}

function arrangeByWeek() {
  let weekArray = [];

  removeTodoContainer();
  let todaysDate = format(endOfDay(new Date()), "yyyy, MM, dd");
  console.log(todaysDate);

  Object.keys(localStorage).forEach((key) => {
    let newObjArray = JSON.parse(localStorage.getItem(key));
    newObjArray.forEach((element) => {
      if (element.dueDate != "No due date") {
        let elementDate = format(new Date(element.dueDate), "yyyy, MM, dd");

        let result = differenceInCalendarDays(
          new Date(elementDate),
          new Date(todaysDate)
        );

        if (result <= 7) {
          renderTodo(element);
          weekArray.push(element);
        }
      }
    });
  });
}

export { clickImportantStuff, showByWeek };
