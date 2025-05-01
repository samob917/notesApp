import makeToDo from "./makeToDo";



export function mainWindow(json, key) {
    const projWindow = document.querySelector(".project");
    let objArr = json[key]
    for (const obj of objArr) {
        var todo = makeToDo(obj);
        projWindow.appendChild(todo);
    }
}