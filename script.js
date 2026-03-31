// Add this helper function to handle HTML tags in the typing effect
function updateOutput(text) {
    const p = document.createElement('p');
    p.innerHTML = text; // Changed from textContent to innerHTML
    output.appendChild(p);
}

const lines = [
    "Initializing <span class='highlight'>AVADIGIT</span> Core...",
    "System status: <span class='online'>ENCRYPTED</span>",
    "Loading <span class='highlight'>Software Engineering</span> Modules...",
    "Accessing <span class='highlight'>AI Automation</span> Suite...",
    " ",
    "> WELCOME TO THE FUTURE OF DIGITAL GROWTH.",
    "> MISSION: Engineering Growth through Digital Innovation.",
    " ",
    "Type 'help' to begin or contact <span class='highlight'>hi@avadigit.com</span>"
];
