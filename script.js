
var startPage = document.getElementById("start-page");
var startButton = document.getElementById("startButton");

var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");

var secondsLeft = 3;

// start button to start quiz
startButton.addEventListener("click", function() {
    startPage.textContent = "";
    startTimer();    
});

// time amount
function startTimer() {
  // every sectond this code will repeat
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = "Time: " + secondsLeft;

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      endGame();
    }

  }, 1000);
}

function endGame() {

  timeEl.textContent = " ";

  var endGameMessage = document.createElement("div");
  endGameMessage.textContent = "you lose"
 
  mainEl.appendChild(endGameMessage);

}

setTime();