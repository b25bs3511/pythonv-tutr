let problems = [];
let currentIndex = 0;

// Intro Elements
const introScreen = document.getElementById("intro-screen");
const step1 = document.getElementById("step-1");
const step2 = document.getElementById("step-2");
const step3 = document.getElementById("step-3");

// App Elements
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

// Cinematic Intro Sequence Timing
function playIntro() {
  setTimeout(() => {
    step1.classList.add("active");
  }, 300);

  setTimeout(() => {
    step1.classList.remove("active");
    step2.classList.add("active");
  }, 1600);

  setTimeout(() => {
    step2.classList.remove("active");
    step3.classList.add("active");
  }, 3200);

  setTimeout(() => {
    introScreen.classList.add("hide");
  }, 5000);
}

// Fetch & Load Problems
async function loadProblems() {
  try {
    const res = await fetch("problems.json");
    problems = await res.json();
    displayProblem(currentIndex);
  } catch (err) {
    titleEl.textContent = "Problems load nahi ho paaye.";
    console.error("Error loading problems.json:", err);
  }
}

function displayProblem(index) {
  if (!problems.length) return;
  const item = problems[index];
  
  // Collapse solution view smoothly
  solutionBox.classList.remove("show");

  titleEl.textContent = item.title;
  descEl.textContent = item.description;
  badgeEl.textContent = item.difficulty;
  categoryEl.textContent = item.category;
  statEl.textContent = `Problem ${index + 1} of ${problems.length}`;
  
  codeEl.textContent = item.solution;
  Prism.highlightElement(codeEl);
}

// Toggle Solution
btnDone.addEventListener("click", () => {
  solutionBox.classList.toggle("show");
});

// Navigate Next
btnNext.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % problems.length;
  displayProblem(currentIndex);
});

// Copy Snippet
btnCopy.addEventListener("click", () => {
  navigator.clipboard.writeText(codeEl.textContent);
  btnCopy.textContent = "Copied! ✅";
  setTimeout(() => {
    btnCopy.textContent = "Copy Code";
  }, 1500);
});

// Init
window.addEventListener("DOMContentLoaded", () => {
  playIntro();
  loadProblems();
});
