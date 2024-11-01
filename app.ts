interface Project {
    name: string;
    description: string;
    url: string;
}

const projects: Project[] = [
    {
        name: "Project 1",
        description: "A brief description of Project 1",
        url: "https://github.com/yourusername/project1"
    },
    {
        name: "Project 2",
        description: "A brief description of Project 2",
        url: "https://github.com/yourusername/project2"
    }
];

function displayProjects() {
    const projectList = document.querySelector(".project-list");

    if (projectList) {
        projects.forEach(project => {
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

displayProjects();
