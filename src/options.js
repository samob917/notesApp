export function setOptions(optionsArr) {
    const optionsDiv = document.querySelector(".options");

    for (const option of optionsArr) {
        var newOption = document.createElement("button");
        newOption.textContent = option;
        optionsDiv.appendChild(newOption);
    }
}