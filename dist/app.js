"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const displayProjects_1 = require("./displayProjects");
function typeWriter(element, text, delay) {
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
    (0, displayProjects_1.displayProjects)();
});
//# sourceMappingURL=app.js.map