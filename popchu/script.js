// JavaScript 코드
const pop = document.getElementById("close");
const scoreElement = document.getElementById("score");
const legendElement = document.getElementById("legend");

let showScore = 0;
let showLegend = parseInt(localStorage.getItem("showLegend")) || 0; // 최고 기록을 숫자로 변환
let popClick = false;
let originalSrc = pop.src;

const recordHighScore = () => {
  if (showScore > showLegend) {
    // showScore와 최고 기록을 비교
    showLegend = showScore;
    legendElement.textContent = showLegend; // 최고 기록 표시 업데이트
    localStorage.setItem("showLegend", showLegend.toString()); // 최고 점수 로컬 스토리지에 저장하기 (숫자로 변환하여 저장)
  }
};

// 로컬 스토리지에서 저장된 score 가져오기
const savedScore = localStorage.getItem("score");
if (savedScore) {
  showScore = parseInt(savedScore);
  scoreElement.textContent = showScore;
}

const saveScore = () => {
  // 로컬 스토리지에 현재 score 저장
  localStorage.setItem("score", showScore.toString());
};

const popchu = () => {
  if (!popClick) {
    pop.src = "./입연거.jpg";
    popClick = true;
    showScore++;
    scoreElement.textContent = showScore;

    // score 업데이트 후 로컬 스토리지에 저장
    saveScore();

    recordHighScore();
  }
};

const before = () => {
  if (popClick) {
    pop.src = originalSrc;
    popClick = false;

    // score 업데이트 후 로컬 스토리지에 저장
    saveScore();
  }
};

// 마우스 클릭과 키보드 'k' 키를 누를 때 모두 이미지 변경 동작 수행
pop.addEventListener("mousedown", popchu);
document.addEventListener("keydown", popchu);
pop.addEventListener("mouseup", before);
document.addEventListener("keyup", before);
