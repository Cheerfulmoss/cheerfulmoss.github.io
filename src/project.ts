// src/project

export interface Project {
    name: string;
    description: string;
    url: string;
}

export const projects: Project[] = [
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