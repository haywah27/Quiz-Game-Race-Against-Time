var startPage = document.getElementById("start-page");
var startButton = document.getElementById("startButton");
var gameTimeClock = document.getElementById("gameTimeClock")

var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");

var countdownSecondsLeft = 1;
var gameTime = 60;

i = 0;
var score = 0;
var currentindex = 0;
var questionEl= document.getElementById("question");
// var answerEl = document.getElementById("question-answers");
var answerOne = document.getElementById("answerOne");
var answerTwo = document.getElementById("answerTwo");
var answerThree = document.getElementById("answerThree");
var answerFour = document.getElementById("answerFour");

var messageDiv = document.querySelector("#message");


var questions = [
{
    title: "Inside which HTML element do we put the JavaScript?",
    choices: ["<javascript", "<script>", "<js", "<scripting>"],
    answer: "<script>"
},
{
    title: "How to write an IF statement in JavaScript?",
    choices: ["if i = 5", "if i = 5 then", "if (i === 5)", "if i === 5 then"],
    answer: "if (i === 5)"
}
]


function displayQuestion() {
    for(var i = 0; i < questions.length; i++){
    answerOne.innerText = questions[i].choices[0];
    answerTwo.innerText = questions[i].choices[1];
    answerThree.innerText = questions[i].choices[2];
    answerFour.innerText = questions[i].choices[3];
    }

 
}



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
      displayQuestion();
    }

  }, 1000);
}

// game time countdown
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

