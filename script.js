var startPage = document.getElementById("start-page");
var startButton = document.getElementById("startButton");
var gameTimeClock = document.getElementById("gameTimeClock")

var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");

var countdownSecondsLeft = 4;
var gameTime = 60;

// start button to start quiz
startButton.addEventListener("click", function() {
    startPage.textContent = "";
    countDown();    
});

// time amount
function countDown() {
  // every sectond this code will repeat
  var countDownInterval = setInterval(function() {
    countdownSecondsLeft--;
    timeEl.textContent = "Time: " + countdownSecondsLeft;

    if(countdownSecondsLeft === 0) {
      clearInterval(countDownInterval);
    //   countDownInterval.remove();
      gameClock();
    }

  }, 1000);
}

function gameClock(){
    timeEl.textContent = " ";
    var timerInterval = setInterval(function() {
        gameTime--;
        gameTimeClock.textContent = "Time: " + gameTime;

        if (gameTime === 0){
            clearInterval(timerInterval);
            // gameTimeClock.textContent = " ";
            endGame();
        }
    }, 100);
}

function endGame() {
    gameTimeClock.textContent = " ";

//   timeEl.textContent = " ";

  var endGameMessage = document.createElement("div");
  endGameMessage.textContent = "you lose"
 
  mainEl.appendChild(endGameMessage);

}

// setTime();