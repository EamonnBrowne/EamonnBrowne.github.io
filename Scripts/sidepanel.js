function toggleMenu() {

  // Toggle the visibility of the side panel
  if (window.getComputedStyle(sidebar,null).getPropertyValue("display") =="flex") {
    sidebar.style.display = "none";
    iconbar.style.display = "flex";

  } else {
    sidebar.style.display = "flex";
    iconbar.style.display = "none";

  }
}

var navButton = document.getElementById("navbutton");
var navButton2 = document.getElementById("navbutton2");
var sidebar = document.getElementById("sidebar");
var iconbar = document.getElementById("iconbar");

// Add a click event listener to the navigation button
navButton.addEventListener("click", toggleMenu);
navButton2.addEventListener("click", toggleMenu);