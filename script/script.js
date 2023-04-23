// CHANGE SCREEN FUNCTION
function showScreen(screenNumber) {
    // Hides the current screen
    var currentScreen = document.querySelector(".screen:not([style*='display: none'])");
    currentScreen.style.display = "none";
  
    // Hides the previous screen
    var previousScreens = document.querySelectorAll(".screen");
    for (var i = 0; i < previousScreens.length; i++) {
      if (previousScreens[i].id != "screen" + screenNumber) {
        previousScreens[i].style.display = "none";
      }
    }

    // Shows the next screen
    var nextScreen = document.getElementById("screen" + screenNumber);
    nextScreen.style.display = "flex";
  }

