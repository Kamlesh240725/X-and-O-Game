let gameInputBoxes = document.querySelectorAll(".game-input");
let restartBtn = document.querySelector(".restart-btn");
let overlayPage = document.querySelector(".blur-page");
let newGameBtn = document.querySelector(".new-game-btn");
let displayText = document.querySelector(".display-text");

let turn = true;
let winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

gameInputBoxes.forEach((input) => {
  input.addEventListener("click", () => {
    if (input.innerHTML == "") {
      if (turn == true) {
        input.innerHTML = `<img src="./rec.svg" alt="O here" width="200%">`;
        turn = false;
      } else if (turn == false) {
        input.innerHTML = `<img src="./close.svg" alt="X here" width="250%">`;
        turn = true;
      } else {
        alert(
          " Programming Error... please try again later \n or try to contact The Developer"
        );
      }
    }
    checkWinner();
  });
});
let checkWinner = () => {

    
    // Winning Condition Checker
    
    winningConditions.forEach((input) => {
    let value1 = gameInputBoxes[input[0]].innerHTML;
    let value2 = gameInputBoxes[input[1]].innerHTML;
    let value3 = gameInputBoxes[input[2]].innerHTML;
    if (value1 != "" && value1 == value2 && value1 == value3) {
      if (value1 == `<img src="./rec.svg" alt="O here" width="200%">`) {
        displayText.innerHTML = "Player O wins!";
        overlayPage.style.visibility = "visible";
      } else if (
        value1 == `<img src="./close.svg" alt="X here" width="250%">`
      ) {
        displayText.innerHTML = "Player X wins!";
        overlayPage.style.visibility = "visible";
      }
      gameInputBoxes.forEach((input) => {
        input.disabled = true;
      });
    }

// Draw Condition Checker

    let counter = 0;
    gameInputBoxes.forEach((input) => {
      if (input.innerHTML != "") {
        counter += 1;
      }
      if(counter == 9){
        displayText.innerHTML = "Game Draw";
        overlayPage.style.visibility = "visible";
      }
    });
  });
};
newGameBtn.addEventListener("click", () => {
  gameInputBoxes.forEach((input) => {
    input.innerHTML = "";
    input.disabled = false;
  });
  overlayPage.style.visibility = "hidden";
});
restartBtn.addEventListener("click", () => {
  gameInputBoxes.forEach((input) => {
    input.innerHTML = "";
    input.disabled = false;
  });
});
