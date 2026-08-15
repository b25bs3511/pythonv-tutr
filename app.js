let problems = [];
let currentIndex = 0;

const titleEl = document.getElementById("problem-title");
const descEl = document.getElementById("problem-desc");
const badgeEl = document.getElementById("problem-difficulty");
const categoryEl = document.getElementById("problem-category");
const statEl = document.getElementById("progress-stat");
const codeEl = document.getElementById("solution-code");
const solutionBox = document.getElementById("solution-container");

const btnDone = document.getElementById("btn-done");
const btnNext = document.getElementById("btn-next");
const btnCopy = document.getElementById("btn-copy");

// Fetch problems list
async function loadProblems() {
  try {
    const res = await fetch("problems.json");
    problems = await res.json();
    displayProblem(currentIndex);
  } catch (err) {
    titleEl.textContent = "Problems load nahi ho paaye.";
    console.error(err);
  }
}

function displayProblem(index) {
  const item = problems[index];
  
  // Reset solution visibility
  solutionBox.classList.remove("show");

  titleEl.textContent = item.title;
  descEl.textContent = item.description;
  badgeEl.textContent = item.difficulty;
  categoryEl.textContent = item.category;
  statEl.textContent = `Problem ${index + 1} of ${problems.length}`;
  
  codeEl.textContent = item.solution;
  Prism.highlightElement(codeEl);
}

// Done / Show Solution Event
btnDone.addEventListener("click", () => {
  solutionBox.classList.toggle("show");
});

// Next Problem Event
btnNext.addEventListener("click", () => {
  if (currentIndex < problems.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0; // Loop back to start
  }
  displayProblem(currentIndex);
});

// Copy Code Button
btnCopy.addEventListener("click", () => {
  navigator.clipboard.writeText(codeEl.textContent);
  btnCopy.textContent = "Copied! ✅";
  setTimeout(() => {
    btnCopy.textContent = "Copy Code";
  }, 1500);
});

loadProblems();
