import { addItemButton, newProjButton } from "./options";
import { getProjects } from "./projects";
import { mainWindow } from "./mainWindow";
import "./style.css"
addItemButton();
newProjButton();
getProjects(["Main"]);
let todos = [{"text": "Hello World"}];
mainWindow(todos)