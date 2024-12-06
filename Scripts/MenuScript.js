// Listen for scroll events to update active link dynamically
document.addEventListener("scroll", () => {
    const sections = document.querySelectorAll(".section"); // All sections in the menu
    const navLinks = document.querySelectorAll(".sidebar a"); // All sidebar links

    let currentSection = "";

    // Loop through sections to find the one currently in view
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute("id"); // Get the id of the current section
        }
    });

    // Loop through navigation links to update the active class
    navLinks.forEach((link) => {
        link.classList.remove("active"); // Remove active class from all links
        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active"); // Add active class to the matching link
        }
    });
});

// New Carousel Functionality - Andy
document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector(".carousel-track");
    const prevButton = document.querySelector(".carousel-button.prev");
    const nextButton = document.querySelector(".carousel-button.next");

    let currentIndex = 0;

    // Function to move carousel to the next item
    nextButton.addEventListener("click", () => {
        const items = document.querySelectorAll(".carousel-item");
        currentIndex = (currentIndex + 1) % items.length; // Loop back to the start
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
    });

    // Function to move carousel to the previous item
    prevButton.addEventListener("click", () => {
        const items = document.querySelectorAll(".carousel-item");
        currentIndex = (currentIndex - 1 + items.length) % items.length; // Loop back to the end
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
    });
});


