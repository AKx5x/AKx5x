const typingText = document.querySelector('.typing-text span');
const words = ["Web Developer", "Discord Bot Developer", "Web Designer", "Java Developer", "Minecraft Plugin & Server Developer"];
let index = 0;
let wordIndex = 0;
let currentWord = '';
let letter = '';

function type() {
    if (index < words.length) {
        if (wordIndex < words[index].length) {
            letter = words[index].charAt(wordIndex);
            typingText.textContent += letter;
            wordIndex++;
            setTimeout(type, 100); // Adjust typing speed here
        } else {
            setTimeout(deleteWord, 1000); // Pause before deleting
        }
    }
}

function deleteWord() {
    if (wordIndex > 0) {
        typingText.textContent = words[index].substring(0, wordIndex - 1);
        wordIndex--;
        setTimeout(deleteWord, 100); // Adjust deleting speed here
    } else {
        index++;
        if (index >= words.length) index = 0; // Loop back to the start
        setTimeout(type, 500); // Pause before typing next word
    }
}

// Start typing effect
type();

// Dropdown functionality for experience and service boxes
document.querySelectorAll('.experience-box, .service-box').forEach(box => {
    box.addEventListener('mouseover', () => {
        box.querySelector('.dropdown').style.display = 'block';
    });
    box.addEventListener('mouseout', () => {
        box.querySelector('.dropdown').style.display = 'none';
    });
});
