import { addItemButton, newProjButton } from "./options";
import { getProjects } from "./projects";
import { mainWindow } from "./mainWindow";
import "./style.css"
addItemButton();
newProjButton();
getProjects(["Main"]);
let todos = [{"title": "Hello World", 
    "desc": "First Note! Let me know what you think",
    "due": "09/17/2001",
    "priority": "High",
}];
mainWindow(todos)