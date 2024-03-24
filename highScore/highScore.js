const highScoreList = document.getElementById("highScoreList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

console.log(highScores);

highScoreList.innerHTML = highScores
  .map((highScore) => {
    return `<li class='high-score'>${highScore.name} - ${highScore.score}</li>`;
  })
  .join("");
