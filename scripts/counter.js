const countButton = document.getElementById("counter-increase-btn");
const resetButton = document.getElementById("counter-reset-btn");
const countsElement = document.getElementById("counts");
let count = 0;

countButton.addEventListener('click', () => {
  count++;
  countsElement.textContent = count;
});

resetButton.addEventListener('click', () => {
  count = 0;
  countsElement.textContent = count;
});