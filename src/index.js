import { setOptions } from "./options";
import { getProjects } from "./projects";
import { mainWindow } from "./mainWindow";
import "./style.css"
setOptions(["New Project", "Add Item"]);
getProjects(["Main"]);
let todos = [{"text": "Hello World"}];
mainWindow(todos)