let player1Table = document.getElementById("player1_score");
console.log(player1Table.innerText);
let player2Table = document.getElementById("player2_score");
console.log(player2Table.innerText);
let player1Score = document.getElementById("player1_button");
let player2Score = document.getElementById("player2_button");
let resetButton = document.getElementById("reset_button");
let winLimit = document.getElementById("win_number");
console.log(winLimit.value);

player1Score.addEventListener("click", () => {
  player1Table.innerText++;
  console.log(player1Table.innerText);
  if (player1Table.innerText === winLimit.value) {
    player1Table.style.color = "green";
    player2Table.style.color = "red";
    player1Score.style.opacity = 0.4;
    player2Score.style.opacity = 0.4;
    player1Score.disabled = true;
    player2Score.disabled = true;
    alert("Player 1 Win!!!");

  }
});
player2Score.addEventListener("click", () => {
  player2Table.innerText++;
  console.log(player2Table.innerText);
  if (player2Table.innerText === winLimit.value) {
    player2Table.style.color = "green";
    player1Table.style.color = "red";
    player2Score.style.opacity = 0.4;
    player1Score.style.opacity = 0.4;
    player2Score.disabled = true;
    player1Score.disabled = true;
    alert("Player 2 Win!!!");
  }
});

resetButton.addEventListener("click", () => {
  player1Table.innerText = 0;
  player2Table.innerText = 0;
  player1Score.disabled = false;
  player2Score.disabled = false;
  player2Score.style.opacity = 1;
  player1Score.style.opacity = 1;
});
