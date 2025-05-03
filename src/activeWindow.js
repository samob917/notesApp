let activeWindow = "Main";

function getActiveWindow() {
    return activeWindow;
}

function setActiveWindow(key) {
    activeWindow = key;
    return activeWindow;
}

export {getActiveWindow, setActiveWindow}