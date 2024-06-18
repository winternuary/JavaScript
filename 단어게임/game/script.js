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
  "eys",
  "woder",
  "whole",
  "coffee",
  "extra ordinary",
  "book",
  "school",
];

const startGame = document.getElementById("startGame");
const endGame = document.getElementById("endGame");
const random = document.getElementById("random");
const input = document.getElementById("input");

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
  input.value = ""; // 입력 필드 초기화
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
      alert("정답입니다! +5점");
    } else {
      score -= 2;
      alert(`오답입니다. 정답은 '${correct}'입니다. -2점`);
    }

    startNewGame();
  }
});

endGame.addEventListener("click", function clickEndGame() {
  alert(`게임을 끝냅니다. 최종 점수: ${score}점`);
  window.location.href = "../index.html";
});
