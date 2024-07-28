let gameInputBoxes = document.querySelectorAll(".game-input");
let restartBtn = document.querySelector(".restart-btn");
let turn = true;
let winningConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

gameInputBoxes.forEach((input) => {
  input.addEventListener("click", () => {
    if(input.innerHTML == "")
    {
        if (turn == true) {
            input.innerHTML = `<img src="./rec.png" alt="O here" width="55%">`;
            turn = false;
            } 
        else if (turn == false) {
            input.innerHTML = `<img src="./close.png" alt="X here" width="55%">`;
            turn = true;
            } 
        else {
            alert(
                " Programming Error... please try again later \n or try to contact The Developer"
            );
            }
    }
    else{
        alert('Maa k Lode izzat se Khel le..');
    }
    
  });
});
setInterval(() => {
    winningConditions.forEach((input) => {
        let index1 = input[0]; 
        let index2 = input[1];
        let index3 = input[2];
        let value1 = gameInputBoxes[index1].innerHTML;
        let value2 = gameInputBoxes[index2].innerHTML;
        let value3 = gameInputBoxes[index3].innerHTML;
        if((value1 != "") && (value1 == value2) && (value1 == value3))
        {
            if( value1 == `<img src="./rec.png" alt="O here" width="55%">`)
            {
                alert("Player O wins!");
            }
            else if(value1 == `<img src="./close.png" alt="X here" width="55%">`)
            {
                alert("Player X wins!");
            }
            gameInputBoxes.forEach((input) => {
                input.innerHTML = "";
              });
        }
    });
}, 200);







  restartBtn.addEventListener("click", () => {
    gameInputBoxes.forEach((input) => {
      input.innerHTML = "";
    });
  });
