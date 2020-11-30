var startPage = document.getElementById("start-page");
var startButton = document.getElementById("startButton");
var gameTimeClock = document.getElementById("gameTimeClock")

var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");

var countdownSecondsLeft = 1;
var gameTime = 60;

var score = 0;
var questionEl = document.getElementById("question");
var answerEl = document.getElementById("answers");

var questionNumber = -1;
var answer;



var questions = [
{
    title: "Inside which HTML element do we put the JavaScript?",
    choices: ["<javascript>", "<script>", "<js>", "<scripting>"],
    answer: "<script>"
},
{
    title: "How to write an IF statement in JavaScript?",
    choices: ["if i = 5", "if i = 5 then", "if (i === 5)", "if i === 5 then"],
    answer: "if (i === 5)"
},
{
    title: "How does a FOR loop start?",
    choices: ["for (i = 0; i <= 5)", "for (i <= 5; i++)", "for i = 1 to 5", "for (i = 0; i <= 5; i++)"],
    answer: "for (i = 0; i <= 5; i++)"
},
{
    title: "What is the correct way to write a JavaScript array?",
    choices: ["var colors = (1:'red', 2:'green', 3:'blue')", "var colors = ['red', 'green', 'blue']", "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')", "var colors = 'red', 'green', 'blue'"],
    answer: "var colors = ['red', 'green', 'blue']"
},

{
    title: "Which event occurs when the user clicks on an HTML element?",
    choices: ["onclick", "onmouseclick", "onchange", "onmouseover"],
    answer: "onclick"
}
]

// page setup
answerEl.textContent = "";


// start button to start quiz
startButton.addEventListener("click", function() {
    startPage.textContent = " ";
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

        if (gameTime < 0){
            clearInterval(timerInterval);
            // gameTimeClock.textContent = " ";
            endGame();
        }
    }, 1000);
}




function displayQuestion() {
    questionNumber++;
    if (questionNumber < questions.length){
        answer = questions[questionNumber].answer
        questionEl.textContent = questions[questionNumber].title;
        answerEl.innerHTML = "";
    
        var choices = questions[questionNumber].choices;
    
        for (var q = 0; q < choices.length; q++) {
            var nextChoice = document.createElement("button");
    
            nextChoice.textContent = choices[q]
            
            // answerBtn = answerEl.appendChild(nextChoice).setAttribute("class", "p-3 m-1 btn btn-light btn-block");
            answerBtn = answerEl.appendChild(nextChoice);
        }

    } else {
        endGame()
    }
}



answerEl.addEventListener("click", function (event) {
    var pEl= document.getElementsByClassName("feedback")[0]

    // evaluation of user's answer choices & feedback
    if (answer === event.target.textContent) {   
        pEl.innerHTML = "Correct!";
        setTimeout(hideFeedback,1000);
        score++;
        showFeedback();   
    } else {
        pEl.innerHTML = "Sorry, that's incorrect.";
        setTimeout(hideFeedback,1000);
        gameTime = gameTime - 10;
        showFeedback();
    }    
    displayQuestion();
});



function hideFeedback(){
    var pEl= document.getElementsByClassName("feedback")[0]
    pEl.style.display='none'
}

function showFeedback(){
    var pEl= document.getElementsByClassName("feedback")[0]
    pEl.removeAttribute('style');
}



function endGame() {
    gameTimeClock.textContent = " ";
    answerEl.textContent = " ";
    questionEl.textContent = " ";
    gameTime = -3;
    console.log("donezo")
//     var endGameMessage = document.createElement("div");
//     endGameMessage.textContent = "you lose"
 
//   mainEl.appendChild(endGameMessage);

}

