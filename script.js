function toggleMenu() {
    const menu = document.getElementById('side-menu');
    if (menu.style.width === '280px') {
        menu.style.width = '0';
    } else {
        menu.style.width = '280px';
    }
}

// Keep the previous typing effect code below...
const output = document.getElementById('output');
const typer = document.getElementById('typer');

const lines = [
    "<span class='highlight'>Connecting Nigeria To Tomorrow.</span>",
    "Welcome to <span class='highlight'>AVADIGIT</span> Terminal.",
    "System status: <span class='online'>ACTIVE</span>",
    "Explore our services or click the chat bar to connect.",
    " ",
    "> [ENGINEERING GROWTH THROUGH DIGITAL INNOVATION]"
];

let lineIndex = 0;
let charIndex = 0;

function typeEffect() {
    if (lineIndex < lines.length) {
        if (charIndex < lines[lineIndex].length) {
            typer.textContent += lines[lineIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeEffect, 40);
        } else {
            const p = document.createElement('p');
            p.innerHTML = lines[lineIndex];
            output.appendChild(p);
            typer.textContent = '';
            charIndex = 0;
            lineIndex++;
            setTimeout(typeEffect, 600);
        }
    }
}

window.onload = typeEffect;
