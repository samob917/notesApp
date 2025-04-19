export function getProjects(projectList) {
    const projectsDiv = document.querySelector(".project-list");

    for (const project of projectList) {
        var newProject = document.createElement("button");
        newProject.textContent = project;
        projectsDiv.appendChild(newProject);
    }
};