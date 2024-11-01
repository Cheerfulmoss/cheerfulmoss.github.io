import { displayProjects } from './displayProjects';

function typeWriter(element: Element, text: string, delay: number) {
    let index = 0;

    function type() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, delay);
        }
    }

    type();
}

document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header h1");
    if (header) {
        typeWriter(header, "My GitHub Projects", 100);
    }
    displayProjects();
});