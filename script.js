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









// // MenuBar Toggle Handling
// var menubar = document.querySelector(".menubar");
// function toggle(e) {
//   if (e.name == "menu-outline") {
//     e.name = "close-outline";
//     menubar.style.display = "Block";
//     // menubar.classList.replace('top-[150vw]','left-0');
//     // console.log('checked')
//   } else {
//     e.name = "menu-outline";
//     // menubar.classList.replace('top-57','left-0');
//     menubar.style.display = "none";
//   }
// }