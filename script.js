// Toggle Function for 50% Screen Width
function toggleMenu() {
    const menu = document.getElementById('side-menu');
    if (menu.style.width === "50%") {
        menu.style.width = "0";
    } else {
        menu.style.width = "50%";
    }
}

// Terminal Typer Animation
const output = document.getElementById('output');
const typer = document.getElementById('typer');

const lines = [
    "Initializing <span class='highlight'>AVADIGIT</span> Protocol...",
    "Engineering Growth >> Nigeria >> Global.",
    " ",
    "> [PROTOCOL_LOADED]",
    "> Modules: [Software_Eng] [AI_Automation]",
    " ",
    "Status: <span style='color: #25d366'>SECURE_ACTIVE</span>",
    "Reach out via the menu or WhatsApp."
];

let lineIndex = 0;
let charIndex = 0;

function typeEffect() {
    if (lineIndex < lines.length) {
        let currentLine = lines[lineIndex];
        if (charIndex < currentLine.length) {
            if (currentLine.charAt(charIndex) === "<") {
                charIndex = currentLine.indexOf(">", charIndex) + 1;
            } else {
                charIndex++;
            }
            typer.innerHTML = currentLine.substring(0, charIndex);
            setTimeout(typeEffect, 30);
        } else {
            const p = document.createElement('p');
            p.innerHTML = currentLine;
            output.appendChild(p);
            typer.innerHTML = '';
            charIndex = 0;
            lineIndex++;
            setTimeout(typeEffect, 600);
        }
    }
}

window.onload = typeEffect;
