let numberOfFaces = 0;
const theLeftSide = document.getElementById("leftSide");
const theRightSide = document.getElementById("rightSide");
let easy = Math.floor(Math.random() * 2) + 1;
let medium = Math.floor(Math.random() * (5 - 2 + 1)) + 2;
let hard = Math.floor(Math.random() * (7 - 5 + 1)) + 5;
let difficulty = prompt(
  "Choose game difficulty: \n\n1. Easy\n2. Medium\n3. Hard"
);
if (difficulty == "easy" || difficulty == 1) {
  numberOfFaces = easy;
  generateFaces();
} else if (difficulty == "medium" || difficulty == 2) {
  numberOfFaces = medium;
  generateFaces();
} else if (difficulty == "hard" || difficulty == 3) {
  numberOfFaces = hard;
  generateFaces();
} else {
  alert("Invalid selection. Try again.");
}
function generateFaces() {
  for (let i = 0; i < numberOfFaces; i++) {
    const face = document.createElement("img");
    face.src = "images/smile.png";
    const randomTop = Math.floor(Math.random() * 400) + 1;
    const randomLeft = Math.floor(Math.random() * 400) + 1;
    face.style.top = randomTop + "px";
    face.style.left = randomLeft + "px";
    theLeftSide.appendChild(face);
  }
  const leftSideImages = theLeftSide.cloneNode(true);
  leftSideImages.removeChild(leftSideImages.lastChild);
  theRightSide.appendChild(leftSideImages);
  theLeftSide.lastChild.addEventListener("click", nextLevel);
  document.body.addEventListener("click", gameOver);
}
function nextLevel(event) {
  event.stopPropagation();
  while (theLeftSide.firstChild) {
    theLeftSide.removeChild(theLeftSide.firstChild);
  }
  while (theRightSide.firstChild) {
    theRightSide.removeChild(theRightSide.firstChild);
  }
  if (difficulty == "easy" || difficulty == 1) {
    numberOfFaces += 2;
  } else if (difficulty == "medium" || difficulty == 2) {
    numberOfFaces += 3;
  } else if (difficulty == "hard" || difficulty == 3) {
    numberOfFaces += 4;
  }
  generateFaces();
}
function gameOver() {
  alert("Game Over!");
  document.body.removeEventListener("click", gameOver);
  theLeftSide.lastChild.removeEventListener("click", nextLevel);
}

