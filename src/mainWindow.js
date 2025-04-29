import makeToDo from "./makeToDo";

export function mainWindow(objArr) {
    const projWindow = document.querySelector(".project");

    for (const obj of objArr) {
        var todo = makeToDo(obj);
        projWindow.appendChild(todo);
    }
}