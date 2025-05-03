import { getKeys } from "./todos";
import { projWindow, openWindow } from "./mainWindow";


export function getProjects() {
    const projectsDiv = document.querySelector(".project-list");
    let projectList = getKeys();
    for (const project of projectList) {
        var newProject = document.createElement("button");
        newProject.addEventListener("click", (e) => {
            let key = e.target.textContent;
            openWindow(key);
        });
        newProject.textContent = project;
        projectsDiv.appendChild(newProject);
    }
};