import { addItemButton, newProjButton } from "./options";
import { getProjects } from "./projects";
import { mainWindow } from "./mainWindow";
import { todos } from "./todos";
import "./style.css"
addItemButton();
newProjButton();
getProjects(["Main"]);
mainWindow(todos, "main")