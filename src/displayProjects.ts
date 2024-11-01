// src/displayProjects.ts

import { Project, projects } from './project';

export function displayProjects() {
    const projectList = document.querySelector(".project-list");

    if (projectList) {
        projects.forEach((project: Project) => {
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