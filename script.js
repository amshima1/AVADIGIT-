/**
 * Neo Cloud Dynamic Text Presentation
 */

// 1. Define the sequence of messages
const textsToPresent = [
    "Neo Cloud: Your Partner In Digital Transformation.",
    "Connecting Nigeria To Tomorrow.",
    "Digital Africa Through Innovation.",
    "Join us and help build a better future."
];

// 2. Configuration parameters
const typingSpeed = 50; // Milliseconds per character
const pauseBetweenTexts = 2000; // Milliseconds to wait before starting next text
const elementToUpdate = document.getElementById('typer-text');

// 3. Keep track of our position
let textArrayIndex = 0;
let characterIndex = 0;

// 4. The main presentation function
function startPresentation() {
    // If we have finished all texts, reset the loop
    if (textArrayIndex >= textsToPresent.length) {
        textArrayIndex = 0;
        characterIndex = 0;
    }

    // A. Type the characters of the current message one-by-one
    if (characterIndex < textsToPresent[textArrayIndex].length) {
        // We preserve the cursor element
        const currentText = textsToPresent[textArrayIndex].substring(0, characterIndex + 1);
        elementToUpdate.innerHTML = currentText + '<span class="cursor">|</span>';
        
        characterIndex++;
        
        // Wait and type the next character
        setTimeout(startPresentation, typingSpeed);
        
    } else {
        // B. The text is complete. Now pause.
        characterIndex = 0; // Reset character pointer
        textArrayIndex++; // Move to the next text in array
        
        // Wait and start the NEXT text
        setTimeout(startPresentation, pauseBetweenTexts);
    }
}

// 5. Initialize the presentation once the window loads
window.onload = startPresentation;
