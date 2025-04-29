export function createProject() {
    const projName = prompt("New Project Name:")
    const projList = document.querySelector(".project-list");

    const newProj = document.createElement("button");
    newProj.textContent = projName;
    projList.appendChild(newProj);
}