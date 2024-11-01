var projects = [
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
    var projectList = document.querySelector(".project-list");
    if (projectList) {
        projects.forEach(function (project) {
            var projectCard = document.createElement("div");
            projectCard.className = "project";
            projectCard.innerHTML = "\n                <h2>".concat(project.name, "</h2>\n                <p>").concat(project.description, "</p>\n                <a href=\"").concat(project.url, "\" target=\"_blank\">View on GitHub</a>\n            ");
            projectList.appendChild(projectCard);
        });
    }
}
displayProjects();
