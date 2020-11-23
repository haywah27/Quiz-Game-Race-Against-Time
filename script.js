var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");

var secondsLeft = 60;

// time amount
function setTime() {
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