import makeToDo from "./makeToDo";
import { clearDiv } from "./utilities";
import { editToDo, editToDoWithObj, getToDo } from "./todos";
import { getActiveWindow } from "./activeWindow";
import { openWindow } from "./mainWindow";

function closeDialog() {
    const dialog = document.querySelector("dialog");
    dialog.close();
}


function handleForm(e) {
    e.preventDefault();
    console.log("form submitted");
    const id = e.target.parentElement.id;
    const title = document.querySelector("#title").value;
    const desc = document.querySelector("#desc").value;
    const due = document.querySelector("#due").value;
    const priority = document.querySelector("#priority").value;
    const newToDoData = {"title": title, "desc": desc, "due": due, "priority": priority};
    editToDoWithObj(getActiveWindow(), id, newToDoData);
    openWindow(getActiveWindow());
    closeDialog();

}

function makeForm(obj) {
    const form = document.createElement("form");
    form.action = "";
    const titleDiv = document.createElement("div")
    titleDiv.classList.add("formTitle")
    const titleLabel = document.createElement("label");
    titleLabel.for = "title";
    titleLabel.textContent = "Title: "
    const titleInput = document.createElement("input")
    titleInput.type = "text";
    titleInput.name = "title";
    titleInput.id = "title";
    titleInput.value = obj.title;
    titleDiv.appendChild(titleLabel);
    titleDiv.appendChild(titleInput);

    const descDiv = document.createElement("div");
    descDiv.classList.add("formDesc");
    const descLabel = document.createElement("label");
    descLabel.for = "desc";
    descLabel.textContent = "Description: "
    const descInput = document.createElement("input")
    descInput.type = "text";
    descInput.name = "desc";
    descInput.id = "desc";
    descInput.value = obj.desc;
    descDiv.appendChild(descLabel);
    descDiv.appendChild(descInput);

    const dueDiv = document.createElement("div");
    dueDiv.classList.add("formDue");
    const dueLabel = document.createElement("label");
    dueLabel.for = "due";
    dueLabel.textContent = "Due Date: "
    const dueInput = document.createElement("input")
    dueInput.type = "text";
    dueInput.name = "due";
    dueInput.id = "due";
    dueInput.value = obj.due;
    dueDiv.appendChild(dueLabel);
    dueDiv.appendChild(dueInput);

    const priorityDiv = document.createElement("div");
    priorityDiv.classList.add("formDue");
    const priorityLabel = document.createElement("label");
    priorityLabel.for = "priority";
    priorityLabel.textContent = "Priority: ";
    const priorityInput = document.createElement("select");
    const optionNone = document.createElement("option");
    optionNone.value = "";
    optionNone.textContent = "Select an option!";
    const optionLow = document.createElement("option");
    optionLow.value = "Low";
    optionLow.textContent = "Low";
    const optionMed = document.createElement("option");
    optionMed.value = "Medium";
    optionMed.textContent = "Medium";
    const optionHigh = document.createElement("option");
    optionHigh.value = "High";
    optionHigh.textContent = "High";
    priorityInput.appendChild(optionNone);
    priorityInput.appendChild(optionLow);
    priorityInput.appendChild(optionMed);
    priorityInput.appendChild(optionHigh);
    priorityInput.name = "priority";
    priorityInput.id = "priority";
    priorityInput.value = obj.priority;
    priorityDiv.appendChild(priorityLabel);
    priorityDiv.appendChild(priorityInput);

    const submitButton = document.createElement("button");
    submitButton.classList.add("formSubmit");
    submitButton.textContent = "Edit To Do"
    submitButton.addEventListener("click", handleForm);


    form.appendChild(titleDiv);
    form.appendChild(descDiv);
    form.appendChild(dueDiv);
    form.appendChild(priorityDiv);
    form.appendChild(submitButton);

    return form
}

function openForm(key, id) {
    let obj = getToDo(key, id)
    const dialog = document.querySelector("dialog")
    clearDiv(dialog);
    const closeButton = document.createElement("button");
    closeButton.textContent = "Close";
    closeButton.addEventListener("click", () => {dialog.close()})
    const form = makeForm(obj);
    dialog.appendChild(form);
    dialog.appendChild(closeButton);
    dialog.showModal();
}

export function editToDoById(key, id) {
    openForm(key, id);
}