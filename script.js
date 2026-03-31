// 1. Menu Logic
function toggleMenu() {
    const menu = document.getElementById('side-menu');
    if (menu.style.width === "300px") {
        menu.style.width = "0";
    } else {
        menu.style.width = "300px";
    }
}

// 2. Typing Effect Logic
const output = document.getElementById('output');
const typer = document.getElementById('typer');

const lines = [
    "Initializing <span class='highlight'>AVADIGIT</span> Core Systems...",
    "Connecting Nigeria to Tomorrow.",
    " ",
    "> [ENGINEERING_GROWTH_THROUGH_DIGITAL_INNOVATION]",
    "> Services: Python Engineering | AI Automation | Web Systems",
    " ",
    "Status: <span style='color: #25d366'>SYSTEMS_ACTIVE</span>",
    "Open the menu to explore or chat via WhatsApp below."
];

let lineIndex = 0;
let charIndex = 0;

function typeEffect() {
    if (lineIndex < lines.length) {
        if (charIndex < lines[lineIndex].length) {
            // Support for HTML tags in typing
            if (lines[lineIndex].charAt(charIndex) === "<") {
                // Find closing tag to skip over it
                const closingTagIndex = lines[lineIndex].indexOf(">", charIndex);
                charIndex = closingTagIndex + 1;
            } else {
                charIndex++;
            }
            
            typer.innerHTML = lines[lineIndex].substring(0, charIndex);
            setTimeout(typeEffect, 35);
        } else {
            const p = document.createElement('p');
            p.innerHTML = lines[lineIndex];
            output.appendChild(p);
            typer.innerHTML = '';
            charIndex = 0;
            lineIndex++;
            setTimeout(typeEffect, 600);
        }
    }
}

window.onload = typeEffect;
