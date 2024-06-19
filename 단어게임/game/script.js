const Words = [
  "bed",
  "around",
  "improve",
  "complete",
  "from",
  "notice",
  "represent",
  "claim",
  "flavor",
  "honest",
  "pretty",
  "order",
  "devote",
  "harm",
  "grade",
  "compose",
  "gradual",
  "mark",
  "ago",
  "original",
  "candidate",
  "cover",
  "structure",
  "whatever",
  "certain",
  "struggle",
  "apple",
  "print",
  "code",
  "friend",
  "couple",
  "true",
  "web",
  "open",
  "eyes",
  "wonder",
  "whole",
  "coffee",
  "extraordinary",
  "book",
  "school",
];

const startGame = document.getElementById("startGame");
const endGame = document.getElementById("endGame");
const random = document.getElementById("random");
const input = document.getElementById("input");
const scoreDisplay = document.getElementById("score");
const finalScore = document.getElementById("finalScore");

let correct = "";
let randomWd = "";
let score = 0;

const landomWords = () => {
  return Words[Math.floor(Math.random() * Words.length)];
};

const startNewGame = () => {
  randomWd = landomWords();
  correct = randomWd;
  random.textContent = randomWd;
  input.value = "";
  input.style.display = "block";
  random.style.display = "inline";
  scoreDisplay.style.display = "none";
};

startGame.addEventListener("click", function clickStartGame() {
  alert("게임 시작");
  score = 0; // 점수 초기화
  startNewGame();
});

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    const inputValue = input.value.trim();
    if (inputValue === "") {
      alert("입력값이 없습니다.");
      return;
    }

    if (inputValue === correct) {
      score += 5;
    } else {
      score -= 2;
      alert(`오답입니다. 정답은 '${correct}'입니다. -2점`);
    }

    startNewGame();
  }
});

endGame.addEventListener("click", function clickEndGame() {
  input.style.display = "none"; // 입력 필드 숨김
  random.style.display = "none"; // 단어 숨김
  finalScore.textContent = score; // 최종 점수 표시
  scoreDisplay.style.display = "block"; // 점수 표시
});
