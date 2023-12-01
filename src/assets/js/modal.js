// Query Selectors
const betaForm = document.querySelector("#beta-form");
const bannerCloseButton = document.querySelector("#beta-form #beta-submit");
const bannerSubmitButton = document.querySelector("#beta-form #close-submit");
const banner = document.querySelector(".banner");
let buttonClosed = localStorage.getItem("buttonClosed");

// Check if cookie is set before displaying the banner 
if (buttonClosed !== "true") {
    banner.classList.remove('close');
}

// Close Modal when clicking Close
bannerSubmitButton.addEventListener('click', () => {
    banner.classList.add("close");
    localStorage.setItem("buttonClosed", "true");
});

// Event listener to close the modal when clicking outside of it
document.body.addEventListener('click', (event) => {
    if (!betaForm.contains(event.target) && !bannerSubmitButton.contains(event.target)) {
        banner.classList.add("close");
    }
});