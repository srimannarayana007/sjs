
const words = ["react", "angular", "javascript", "bootstrap", "tailwind"];

// Hints
const hints = [
  "Javascript Library",
  "Javascript Framework",
  "Programming Language",
  "Styling Library",
  "Styling Library",
];

// Initialise display word
let displayWord = "";
let displayHint = "";

// Shuffle function
function shuffle(str) {
  let strArray = Array.from(str);
  for (let i = strArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    // Swap letters
    [strArray[i], strArray[j]] = [strArray[j], strArray[i]];
  }
  return strArray.join("");
}

// Check function
function check() {
  let input = document.getElementById("input");
  let output = document.getElementById("output");
  if (input.value.toLocaleLowerCase() === displayWord.toLocaleLowerCase())
    output.innerHTML = "Result: Correct";
  else output.innerHTML = "Result: In-correct";
}

// Refresh function
function refresh() {
  let index = Math.floor(Math.random() * words.length);
  displayWord = words[index];
  displayHint = hints[index];

  let scrambledWordElement = document.getElementById("scrambleWord");
  scrambledWordElement.innerText = shuffle(displayWord).toUpperCase();

  let hint = document.getElementById("hint");
  hint.innerHTML = "<b>Hint :</b> " + displayHint;

  document.getElementById("output").innerText = "Result:";
}

refresh();