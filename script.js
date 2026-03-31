const output = document.getElementById('output');
const typer = document.getElementById('typer');

const lines = [
    "<span class='highlight'>Connecting Nigeria To Tomorrow.</span>",
    "We are not just a tech agency—",
    "We are engineers of <span class='highlight'>Digital Systems</span>.",
    "System access: <span class='online'>ENCRYPTED</span>",
    " ",
    "> WELCOME TO <span class='highlight'>AVADIGIT</span>",
    "> SERVICES: [Python Engineering] [AI Automation] [Strategic Brand Growth]",
    " ",
    "Engage with our AI Bot below or reach us on WhatsApp."
];

let lineIndex = 0;
let charIndex = 0;

function typeEffect() {
    if (lineIndex < lines.length) {
        if (charIndex < lines[lineIndex].length) {
            typer.textContent += lines[lineIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeEffect, 45); // Typing speed
        } else {
            // Push the finished line to output (using innerHTML for spans)
            const p = document.createElement('p');
            p.innerHTML = lines[lineIndex];
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
