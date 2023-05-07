// Array to store the box colors
var colors = [];

// Array to store the box elements
var boxes = [];

// Number of boxes to display
var numBoxes = 9;

// Flag to indicate whether game is in progress
var gameInProgress = false;

// Function to start the game
function startGame() {
  // Reset the game
  colors = [];
  boxes = [];
  gameInProgress = true;

  // Generate random colors for the boxes
  for (var i = 0; i < numBoxes; i++) {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var color = "rgb(" + r + ", " + g + ", " + b + ")";
    colors.push(color);
  }

  // Display the boxes for a short time
  for (var i = 0; i < numBoxes; i++) {
    var box = document.createElement("div");
    box.style.backgroundColor = colors[i];
    box.className = "box";
    box.onclick = checkGuess;
    boxes.push(box);
    document.querySelector(".grid").appendChild(box);
  }

  setTimeout(hideBoxes, 2000);
}

// Function to hide the boxes after a short time
function hideBoxes() {
  for (var i = 0; i < numBoxes; i++) {
    boxes[i].style.backgroundColor = "#333";
  }
}

// Function to check the user's guess
function checkGuess() {
  if (!gameInProgress) {
    return;
  }

  var index = boxes.indexOf(this);
  if (colors[index] == this.style.backgroundColor) {
    this.style.backgroundColor = "#fff";
    this.onclick = null;
    var remaining = boxes.filter(function(box) {
      return box.style.backgroundColor != "#fff";
    });
    if (remaining.length == 0) {
      gameInProgress = false;
      alert("You win!");
    }
  }
}
