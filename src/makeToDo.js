export default function makeToDo(obj) {
    const toDoDiv = document.createElement("div");
    toDoDiv.classList.add("todo")

    const title = document.createElement("h2");
    title.classList.add("title")
    title.textContent = obj.title;
    const desc = document.createElement("p");
    desc.classList.add("desc")
    desc.textContent = obj.desc;
    const due = document.createElement("p");
    due.classList.add("due")
    due.textContent = obj.due;
    const priority = document.createElement("p");
    priority.classList.add("priority")
    priority.textContent = obj.priority;

    toDoDiv.appendChild(title);
    toDoDiv.appendChild(desc);
    toDoDiv.appendChild(due);
    toDoDiv.appendChild(priority);
    return toDoDiv
}