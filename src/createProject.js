import { addKey } from "./todos";
import { openWindow } from "./mainWindow";


export function createProject() {
    const projName = prompt("New Project Name:")
    const projList = document.querySelector(".project-list");
    const newProj = document.createElement("button");
    newProj.addEventListener("click", (e) => {
        let key = e.target.textContent;
        openWindow(key);
    });
    if (projName != '') {
        newProj.textContent = projName;
        projList.appendChild(newProj);
        addKey(projName)
    }
    
}