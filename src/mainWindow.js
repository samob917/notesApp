import makeToDo from "./makeToDo";
import { getTodos } from "./todos";
import { clearDiv } from "./utilities";
function clearWindow() {
    const projWindow = document.querySelector(".project");
    clearDiv(projWindow);
}

function openWindow(key) {
    clearWindow();
    let objArr = getTodos(key);
    for (const obj of objArr) {
        var todo = makeToDo(obj);
        projWindow.appendChild(todo);
    }
}

function mainWindow(json, key) {
    const projWindow = document.querySelector(".project");
    let objArr = json[key]
    for (const obj of objArr) {
        var todo = makeToDo(obj);
        projWindow.appendChild(todo);
    }
}

export {openWindow, mainWindow}