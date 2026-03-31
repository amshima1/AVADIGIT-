/**
 * AVADIGIT Interface Script
 * Logic for: Navigation, Layout, and Terminal Animation
 */

// --- 1. NAVIGATION LOGIC ---
function toggleMenu() {
    const menu = document.getElementById('side-menu');
    
    // Set width to 70% to cover more than half the screen
    // The CSS z-index ensures the Header and WhatsApp stay on top
    if (menu.style.width === "70%") {
        menu.style.width = "0";
    } else {
        menu.style.width = "70%";
    }
}

// --- 2. TERMINAL TYPING ANIMATION ---
const output = document.getElementById('output');
const typer = document.getElementById('typer');

// Updated content to match your latest branding
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
            // Check for HTML tags so they don't "type" out literally
            if (currentLine.charAt(charIndex) === "<") {
                charIndex = currentLine.indexOf(">", charIndex) + 1;
            } else {
                charIndex++;
            }
            
            typer.innerHTML = currentLine.substring(0, charIndex);
            setTimeout(typeEffect, 30); // Speed of character typing
            
        } else {
            // Line is finished, push to output and start next line
            const p = document.createElement('p');
            p.innerHTML = currentLine;
            output.appendChild(p);
            
            typer.innerHTML = '';
            charIndex = 0;
            lineIndex++;
            setTimeout(typeEffect, 600); // Pause between lines
        }
    }
}

// Initialize terminal once the window loads
window.onload = typeEffect;
