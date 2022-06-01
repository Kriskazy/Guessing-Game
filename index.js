function guessGame() {
  let userName = prompt("Enter Username");
  let attempts = 1;
  let stage = 1;
  let range = 2;
  let points = 0;
  let correctNumber;
  let guessNumber;
  if (userName != null) {
    while (attempts > 0) {
      guessNumber = parseInt(
        prompt(`Stage ${stage}: ${userName}, Predict a number between 1 and ${range}`)
      );
      correctNumber = Math.floor(Math.random() * range) + 1;
      if (guessNumber === correctNumber) {
        points++;
        stage++;
        range++;
      } else {
        attempts--;
      }
    }
    alert(`Game Over ${userName}, You scored ${points} point(s)`);
    guessGame();
  }
}
console.log(guessGame());