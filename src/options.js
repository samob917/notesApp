import { createProject } from "./createProject";
import { addToDo } from "./addToDo";



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
    addItem.addEventListener("click", addToDo);
    optionsDiv.append(addItem);
}
