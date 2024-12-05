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

// Toggle Navigation Bar Visibility - Andy
const navButton = document.getElementById("navbutton");
const iconBar = document.getElementById("iconbar");

navButton.addEventListener("click", () => {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("hidden"); // Toggle the hidden class for sidebar
    iconBar.classList.toggle("hidden"); // Toggle the hidden class for icon bar
});

// Responsive Sidebar Toggle for Smaller Screens
const navButton2 = document.getElementById("navbutton2");
navButton2.addEventListener("click", () => {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("hidden"); // Show/hide sidebar on click
    iconBar.classList.toggle("hidden"); // Show/hide icon bar on click
});

// Add Smooth Scrolling for Navigation Links
document.querySelectorAll(".sidebar a").forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault(); // Prevent default anchor behavior
        const targetSection = document.querySelector(link.getAttribute("href"));
        targetSection.scrollIntoView({
            behavior: "smooth", // Smooth scrolling animation
            block: "start", // Align to the top of the section
        });
    });
});
