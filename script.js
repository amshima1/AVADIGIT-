/**
 * AVADIGIT Terminal & Navigation Logic
 * Features: 75% Slide-out Menu & Cycling Text Presentation
 */

// --- 1. NAVIGATION CONTROL ---
function toggleMenu() {
    const menu = document.getElementById('side-menu');
    
    // Toggle width between 0 and 75% for major screen coverage
    if (menu.style.width === "75%") {
        menu.style.width = "0";
    } else {
        menu.style.width = "75%";
    }
}

// --- 2. CYCLING TEXT PRESENTATION ---
const typer = document.getElementById('typer');
const output = document.getElementById('output');

// The sequence of professional messages to display one after the other
const presentationLines = [
    "Neo Cloud: Your Partner In Digital Transformation.",
    "Connecting Nigeria To Tomorrow.",
    "Digital Africa Through Innovation.",
    "Engineering Growth >> Nigeria >> Global.",
    "Join us and help build a better future."
];

let lineIndex = 0;
let charIndex = 0;
let isDeleting = false;

function playPresentation() {
    const currentFullText = presentationLines[lineIndex];
    
    if (!isDeleting) {
        // TYPING PHASE
        typer.innerHTML = currentFullText.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentFullText.length) {
            // Pause at the end of the sentence
            isDeleting = true;
            setTimeout(playPresentation, 3000); 
        } else {
            setTimeout(playPresentation, 50); 
        }
    } else {
        // DELETING PHASE (Clears for the next message)
        typer.innerHTML = currentFullText.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            lineIndex = (lineIndex + 1) % presentationLines.length; // Loop back to start
            setTimeout(playPresentation, 500);
        } else {
            setTimeout(playPresentation, 30);
        }
    }
}

// --- 3. INITIALIZATION ---
window.onload = () => {
    // Start the cycling text animation
    playPresentation();

    // Close menu if user clicks on the main content area
    document.addEventListener('click', (e) => {
        const menu = document.getElementById('side-menu');
        const toggle = document.getElementById('menu-toggle');
        if (menu.style.width === "75%" && !menu.contains(e.target) && !toggle.contains(e.target)) {
            toggleMenu();
        }
    });
};
