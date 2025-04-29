import makeToDo from "./makeToDo";
import { clearDiv } from "./utilities";

function closeDialog() {
    const dialog = document.querySelector("dialog");
    dialog.close();
}


function handleForm(e) {
    e.preventDefault();
    console.log("form submitted");
    const title = document.querySelector("#title").value;
    console.log(title);
    const desc = document.querySelector("#desc").value;
    const due = document.querySelector("#due").value;
    const priority = document.querySelector("#priority").value;
    const newToDoData = {"title": title, "desc": desc, "due": due, "priority": priority};
    console.log(newToDoData);
    const newToDoDiv = makeToDo(newToDoData);
    const projWindow = document.querySelector(".project");
    closeDialog();
    projWindow.appendChild(newToDoDiv);
}

function makeForm() {
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
    titleInput.placeholder = "Enter Title"
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
    descInput.placeholder = "Enter Description"
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
    dueInput.placeholder = "Enter Due Date"
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
    priorityDiv.appendChild(priorityLabel);
    priorityDiv.appendChild(priorityInput);

    const submitButton = document.createElement("button");
    submitButton.classList.add("formSubmit");
    submitButton.textContent = "Make To Do"
    submitButton.addEventListener("click", handleForm);


    form.appendChild(titleDiv);
    form.appendChild(descDiv);
    form.appendChild(dueDiv);
    form.appendChild(priorityDiv);
    form.appendChild(submitButton);

    return form
}

function openForm() {
    const dialog = document.querySelector("dialog")
    clearDiv(dialog);
    const closeButton = document.createElement("button");
    closeButton.textContent = "Close";
    closeButton.addEventListener("click", () => {dialog.close()})
    const form = makeForm()
    dialog.appendChild(form)
    dialog.appendChild(closeButton);
    dialog.showModal()
}

export function addToDo() {
    openForm()
}