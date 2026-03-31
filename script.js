const output = document.getElementById('output');
const typer = document.getElementById('typer');

const lines = [
    "Initializing AVADIGIT Core...",
    "Loading Software Engineering Modules...",
    "Accessing AI Automation Suite...",
    "Establishing Secure Connection...",
    " ",
    "> WELCOME TO AVADIGIT",
    "> SERVICES: [Python Automation] [Web Systems] [AI Asset Management]",
    "> MISSION: Engineering Growth through Digital Innovation.",
    " ",
    "Type 'help' to see more or contact us at hi@avadigit.com"
];

let lineIndex = 0;
let charIndex = 0;

function typeEffect() {
    if (lineIndex < lines.length) {
        if (charIndex < lines[lineIndex].length) {
            typer.textContent += lines[lineIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeEffect, 40); // Typing speed
        } else {
            // Push the finished line to output and reset typer
            const p = document.createElement('p');
            p.textContent = lines[lineIndex];
            output.appendChild(p);
            typer.textContent = '';
            charIndex = 0;
            lineIndex++;
            setTimeout(typeEffect, 500); // Pause between lines
        }
    }
}

// Start the sequence
window.onload = typeEffect;

