let boxes = document.querySelectorAll(".game-box");
let restartBtn = document.querySelector("#restart-game");

let messageContainer = document.querySelector(".message-container");
let gameMessage = document.querySelector("#game-message");
let changeTurn = document.querySelector(".turn-container");
// To Track Draw
let turnO = true; // playerX, playerO
let count = 0; 



const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

//const resetGame = () => {
  //turnO = true;
  //count = 0;
  //enableBoxes();
 
//  messageContainer.classList.add("hide");
//};


boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      // playerO
      gameMessage.innerText ="🍥 Turn";
      box.innerText = "❟❛❟";
      
      
      turnO = false;
    } else {
      // playerX
      gameMessage.innerText ="❟❛❟ Turn";
      box.innerText = "🍥";
      
      turnO = true;
    }
    box.disabled = true;
    count++;

    let isWinner = checkWinner();

    if (count === 9 && !isWinner) {
      gameDraw();
    }
  });
});

const gameDraw = () => {
  gameMessage.innerText = "Game was a Draw.";
  messageContainer.classList.remove("hide");
  disableBoxes();
};

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = () => {
  gameMessage.innerText = "GAME OVER";
  messageContainer.classList.remove("hide");
  disableBoxes();
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val);
        return true;
      }
    }
  }
};

//restartBtn.addEventListener("click",resetGame);