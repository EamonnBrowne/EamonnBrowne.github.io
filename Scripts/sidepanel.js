function toggleMenu() {
  console.log("Got inside the function")

  // Toggle the visibility of the side panel
  if (window.getComputedStyle(sidebar,null).getPropertyValue("display") =="flex") {
    sidebar.style.display = "none";
    iconbar.style.display = "flex";
    mainContent.classList.add("fade-out");

  } else {
    sidebar.style.display = "flex";
    iconbar.style.display = "none";
    mainContent.classList.remove("fade-out");

  }
}

var navButton = document.getElementById("navbutton");
var navButton2 = document.getElementById("navbutton2");
var mainContent = document.getElementById("main-content");
var sidebar = document.getElementById("sidebar");
var iconbar = document.getElementById("iconbar");

// Add a click event listener to the navigation button
navButton.addEventListener("click", toggleMenu);
navButton2.addEventListener("click", toggleMenu);