import { createProject } from "./createProject";


export function newProjButton() {
    const optionsDiv = document.querySelector(".options");

    const projButton = document.createElement("button");
    projButton.textContent = "New Project";
    projButton.addEventListener("click", createProject);
    optionsDiv.append(projButton);
}

export function addItemButton() {
    const optionsDiv = document.querySelector(".options");

    const addItem = document.createElement("button");
    addItem.textContent = "Add Item";
    optionsDiv.append(addItem);
}
