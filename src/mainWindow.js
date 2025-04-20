export function mainWindow(objArr) {
    const projWindow = document.querySelector(".project");

    for (const obj of objArr) {
        var newObj = document.createElement("div");
        newObj.textContent = obj.text;
        projWindow.appendChild(newObj);
    }
}