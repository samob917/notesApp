import { getActiveWindow } from "./activeWindow";
import { editToDo, editToDoById } from "./editToDo";
import { openWindow } from "./mainWindow";
import { deleteToDo } from "./todos";



export default function makeToDo(obj) {
    const toDoDiv = document.createElement("div");
    toDoDiv.classList.add("todo")
    const title = document.createElement("h2");
    title.classList.add("title")
    title.textContent = obj.title;
    const desc = document.createElement("p");
    desc.classList.add("desc")
    desc.textContent = obj.desc;
    const due = document.createElement("p");
    due.classList.add("due")
    due.textContent = obj.due;
    const priority = document.createElement("p");
    priority.classList.add("priority")
    priority.textContent = obj.priority;

    const del = document.createElement("button");
    del.textContent = "Delete";
    del.addEventListener("click", (e) => {
        const id = e.target.parentElement.id;
        const key = getActiveWindow();
        deleteToDo(key, id);
        openWindow(key);
    })

    const edit = document.createElement("button");
    edit.textContent = "Edit";
    edit.addEventListener("click", (e) => {
        const id = e.target.parentElement.id;
        const key = getActiveWindow();
        editToDoById(key, id);
    })
    

    toDoDiv.id = obj.id;
    toDoDiv.appendChild(title);
    toDoDiv.appendChild(desc);
    toDoDiv.appendChild(due);
    toDoDiv.appendChild(priority);
    toDoDiv.appendChild(del);
    toDoDiv.appendChild(edit)
    return toDoDiv
}