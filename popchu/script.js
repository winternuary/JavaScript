const pop = document.getElementById("close");
const scoreElement = document.getElementById("score");

let showScore = 0;
let popClick = false;
let originalSrc = pop.src;

const popchu = () => {
  if (!popClick) {
    pop.src = "./입연거.jpg";
    popClick = true;
    showScore++;
    scoreElement.textContent = showScore;
  }
};

const before = () => {
  if (popClick) {
    pop.src = originalSrc;
    popClick = false;
  }
};

pop.addEventListener("mousedown", popchu);
pop.addEventListener("mouseup", before);
