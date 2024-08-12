// MenuBar Toggle Handling
const menubar = document.querySelector("#menubar");

document.getElementById("toggler").addEventListener("click", function() {
  // Get the current src of the image
  const currentSrc = this.src;

  // Check if the filename ends with "menubar.png"
  if (currentSrc.endsWith("menubar.png")) {
      this.src = "./assets/close-icon.png"; // Change to cross icon
      menubar.style.display = "block";
      document.body.style.overflow = "hidden";
        
      
  } else {
      this.src = "./assets/menubar.png"; // Change back to menu icon
      menubar.style.display = "none";
      document.body.style.overflow = "";
  }
});

// MenuBar Toggling Animation
document.getElementById("toggler").addEventListener("click", function () {
  const menubar = document.getElementById("menubar");

  if (menubar.classList.contains("active")) {
      // Trigger the slide-out animation
      menubar.classList.remove("active");
      menubar.classList.add("closing");
      
      setTimeout(() => {
          // Remove the closing class after the animation is complete
          menubar.classList.remove("closing");
          menubar.classList.add("hidden");
          menubar.style.visibility = "hidden";
      }, 300); // Match this timeout with the CSS transition duration
  } else {
      // Show the menubar with slide-in animation
      menubar.classList.remove("hidden");
      menubar.style.visibility = "visible";
      
      setTimeout(() => {
          menubar.classList.add("active");
      }, 10); // Small delay to ensure the transition applies
  }
});
