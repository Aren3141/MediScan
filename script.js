// Variable to store the last index picked
let lastIndex = -1;

const aiFacts = [
    "AI can analyze medical images up to 1,000 times faster than humans.",
    "Machine learning models can predict heart failure years before symptoms appear.",
    "AI-powered surgical robots can perform movements with sub-millimeter precision.",
    "Generative AI is currently reducing drug discovery timelines from years to months.",
    "Wearable AI devices can now detect irregular heart rhythms with 97% accuracy."
];

function getNewFact() {
    const displayArea = document.getElementById('fact-display');
    let randomIndex;

    // Logic: Keep picking a number until it's different from the last one
    do {
        randomIndex = Math.floor(Math.random() * aiFacts.length);
    } while (randomIndex === lastIndex);

    // Update the lastIndex so we don't repeat next time
    lastIndex = randomIndex;

    // UI Feedback: Fade out and fade back in with new text
    displayArea.style.opacity = 0;
    
    setTimeout(() => {
        displayArea.innerText = aiFacts[randomIndex];
        displayArea.style.opacity = 1;
    }, 250);
}
// --- SCROLL ANIMATIONS --- //
const observerOptions = {
    threshold: 0.1 // Trigger when 10% of the element is visible
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, observerOptions);

// Select all elements with the 'hidden' class
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


// --- NAVBAR SCROLL EFFECT --- //
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});




// show menu
document.addEventListener("DOMContentLoaded", () => {
    let menu=document.getElementById("menu-toggle");
    let navs = document.getElementById("nav-links");
    
    if (menu && navs) {
        menu.addEventListener("click", () => {
            navs.classList.toggle("show");
        })
    }
})