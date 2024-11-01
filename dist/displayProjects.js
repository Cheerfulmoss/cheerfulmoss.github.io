"use strict";
// src/displayProjects.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.displayProjects = displayProjects;
const project_1 = require("./project");
function displayProjects() {
    const projectList = document.querySelector(".project-list");
    if (projectList) {
        project_1.projects.forEach((project) => {
            const projectCard = document.createElement("div");
            projectCard.className = "project";
            projectCard.innerHTML = `
                <h2>${project.name}</h2>
                <p>${project.description}</p>
                <a href="${project.url}" target="_blank">View on GitHub</a>
            `;
            projectList.appendChild(projectCard);
        });
    }
}
//# sourceMappingURL=displayProjects.js.map