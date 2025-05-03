import makeToDo from "./makeToDo";
import { getTodos } from "./todos";
import { clearDiv } from "./utilities";
import { getActiveWindow, setActiveWindow } from "./activeWindow";

const projWindow = document.querySelector(".project");

function clearWindow() {
    clearDiv(projWindow);
}

function openWindow(key) {
    clearWindow();
    setActiveWindow(key);
    let objArr = getTodos(key);
    for (const obj of objArr) {
        var todo = makeToDo(obj);
        projWindow.appendChild(todo);
    }
}

function mainWindow(json) {
    let key = getActiveWindow();
    let objArr = json[key]
    for (const obj of objArr) {
        var todo = makeToDo(obj);
        projWindow.appendChild(todo);
    }
}

export {projWindow, openWindow, mainWindow}